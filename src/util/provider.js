import React from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'

export const Context = React.createContext()

export class Provider extends React.Component {
    state = {
        loading: false,
    }

    toggleLoadingState = () => {
        this.setState({ loading: true })
    }

    allFeatured = async () => {
        this.toggleLoadingState()

        const state = this.state
        state.helpers = []

        const request = await firebase.firestore().collection("helpers")
            .where("available", "==", true)
            .where("featured", "==", true)
            .limit(15).get()

        request.docs.forEach(doc => {
            state.helpers.push(doc.data())
            state.loading = false
            this.setState(state)
        })

        this.setState({ loading: false })
    }

    getDetail = async (id: string) => {
        this.toggleLoadingState()

        const state = this.state

        const request = await firebase.firestore().collection("helpers").doc(id).get()
        state.helper = request.data()
        state.loading = false
        this.setState(state)
    }

    getRecommended = async (tripid: string) => {
        this.toggleLoadingState()

        const state = this.state
        state.helpers = []

        const request = await firebase.firestore().collection("helpers")
            .where("available", "==", true)
            .where("tripid", "==", tripid)
            .get();
        request.docs.forEach(doc => {
            state.helpers.push(doc.data())
        })
        state.loading = false
        this.setState(state)
    }

    allHelpers = async () => {
        this.toggleLoadingState()

        const state = this.state
        state.helpers = []

        const request = await firebase.firestore().collection("helpers").where("available", "==", true).limit(20).get()
        request.docs.forEach(doc => {
            state.helpers.push(doc.data())
            state.loading = false
            this.setState(state)
        })
    }

    render() {
        return (
            <Context.Provider value={{
                state: this.state,
                actions: {
                    allFeatured: this.allFeatured,
                    allHelpers: this.allHelpers,
                    getDetail: this.getDetail,
                    getRecommended: this.getRecommended
                }
            }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}