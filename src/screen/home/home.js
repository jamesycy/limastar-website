import React from 'react'

import Landing from './widgets/landing/Landing.js'
import Recommended from './widgets/recommended/Recommended.js'
import Footer from './widgets/footer/Footer'

export default class HomePageComponent extends React.Component<any> {
    render() {
        return (
            <React.Fragment>
                <Landing/>
                <Recommended />
                <Footer/>
            </React.Fragment>
        )
    }
}