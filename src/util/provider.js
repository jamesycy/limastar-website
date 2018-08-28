import React from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'

export const Context = React.createContext()

export class Provider extends React.Component {
    state = {
        loading: false,
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
            .limit(20)
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
                    getDetail: this.getDetail,
                    getRecommended: this.getRecommended,
                    unsubscribe: this.unsubscribe
                }
            }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}