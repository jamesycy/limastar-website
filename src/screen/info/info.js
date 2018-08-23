import React from 'react'
import './style.css'

import AfterArrival from './widgets/after_arrival/AfterArrival'
import Holiday from './widgets/holiday/Holiday'
import Service from './widgets/service/Service'
import Application from './widgets/application/Application'

export default class InfoPage extends React.Component<any> {
    render() {
        return (
            <div className="info-container">
                <div className="info-title-wrapper">
                    <h2>FAQ</h2>
                    <hr/>
                </div>

                <div className="info-content-wrapper">
                    <AfterArrival />
                    <Holiday />
                    <Service />
                    <Application />
                </div>
            </div>
        )
    }
}