import React from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'

export const Context = React.createContext()

export class Provider extends React.Component {
    state = {
        loading: false,
        filter: [],
        limit: 10
    }

    subscription = null;
    detail_subcription = null;

    toggleLoadingState = () => {
        this.setState({ loading: true })
    }

    unsubscribe = () => {
        if (this.subscription !== null) this.subscription()
        if (this.detail_subcription !== null) this.detail_subcription()
    }

    allFeatured = async () => {
        this.subscription = firebase.firestore().collection("helpers")
            .where("available", "==", true)
            .limit(15)
            .onSnapshot((snapshot) => {
                this.setState({ loading: true, helpers: [] })
                snapshot.docs.forEach((doc) => {
                    this.setState((state) => {
                        state.helpers.push({...doc.data(), id: doc.id})
                        state.loading = false
                        return state
                    })
                })
            })
    }

    allHelpers = () => {
        this.subscription = firebase.firestore().collection("helpers")
            .where("available", "==", true)
            .limit(this.state.limit)
            .onSnapshot((snapshot) => {
                this.setState({ loading: true, helpers: [] })
                snapshot.docs.forEach((doc) => {
                    this.setState((state) => {
                        state.helpers.push({...doc.data(), id: doc.id})
                        state.loading = false
                        return state
                    })
                })
            })
    }

    getDetail = (id) => {
        this.subscription = firebase.firestore().collection("helpers").doc(id)
        .onSnapshot((snapshot) => {
            this.setState({ loading: true, helper: {} })
            this.setState({ loading: false, helper: {...snapshot.data(), id: snapshot.id }})
        })
    }

    getRecommended = () => {
        this.detail_subcription = firebase.firestore().collection("helpers")
            .where("available", "==", true)
            .where("tripid", "==", this.state.helper.tripid || "")
            .onSnapshot((snapshot) => {
                this.setState({ loading: true, helpers: [] })
                snapshot.docs.forEach((doc) => {
                    this.setState(state => {
                        state.helpers.push({...doc.data(), id: doc.id})
                        state.loading = false
                        return state
                    })
                })
            })
    }

    loadMore = () => {
        this.setState({ limit: this.state.limit + 10 }, () => {
            this.allHelpers();
        })
    }

    toggleFilter = (fieldname) => {
        const filter = this.state.filter
        filter.indexOf(fieldname) > -1 ?
            filter.splice(filter.indexOf(fieldname), 1)
            :
            filter.push(fieldname)

        this.setState({ filter: filter }, () => {
            this.subscription();
            this.subscription = null;
            this.helpersWithFilter();
        })
    }

    helpersWithFilter = () => {
        var ref = firebase.firestore().collection("helpers")
        const filter = this.state.filter;
        if (filter.indexOf("baby") > -1)  ref = ref.where("category.baby", "==", true)
        if (filter.indexOf("children") > -1) ref = ref.where("category.children", "==", true)
        if (filter.indexOf("cleaning") > -1) ref = ref.where("category.cleaning", "==", true)
        if (filter.indexOf("cooking") > -1) ref = ref.where("category.cooking", "==", true)
        if (filter.indexOf("elderly") > -1) ref = ref.where("category.elderly", "==", true)
        if (filter.indexOf("mainland") > -1) ref = ref.where("category.mainland", "==", true)
        if (filter.indexOf("pets") > -1) ref = ref.where("category.pets", "==", true)

        ref = ref.where("available", "==", true).limit(this.state.limit).onSnapshot((snapshot) => {
            this.setState({...this.state, loading: true, helpers: [] })
            snapshot.docs.forEach((doc) => {
                this.setState(state => {
                    state.helpers.push({...doc.data(), id: doc.id})
                    state.loading = false
                    return state
                })
            })
        });

        this.subscription = ref
    }

    filterLoadMore = () => {
        this.setState({ ...this.state, limit: this.state.limit + 10 }, () => {
            this.helpersWithFilter()
        })
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    render() {
        return (
            <Context.Provider value={{
                state: this.state,
                actions: {
                    allFeatured: this.allFeatured,
                    allHelpers: this.allHelpers,
                    loadMore: this.loadMore,
                    getDetail: this.getDetail,
                    getRecommended: this.getRecommended,
                    toggleFilter: this.toggleFilter,
                    filterLoadMore: this.filterLoadMore,
                    unsubscribe: this.unsubscribe
                }
            }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}