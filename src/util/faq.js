import React from 'react'

export const FAQContext = React.createContext()

export class FAQProvider extends React.Component {
    state = {
        after_arrival: false,
        holiday: false,
        service: false,
        application: false
    }

    toggleAfterArrival = () => {
        this.setState({ after_arrival: !this.state.after_arrival })
    }

    toggleHoliday = () => {
        this.setState({ holiday: !this.state.holiday })
    }
    
    toggleService = () => {
        this.setState({ service: !this.state.service })
    }

    toggleApplication = () => {
        this.setState({ application: !this.state.application })
    }

    render() {
        return (
            <FAQContext.Provider value={{
                state: this.state,
                actions: {
                    toggleAfterArrival: this.toggleAfterArrival,
                    toggleHoliday: this.toggleHoliday,
                    toggleService: this.toggleService,
                    toggleApplication: this.toggleApplication
                }
            }}>
                {this.props.children}
            </FAQContext.Provider>
        )
    }
}