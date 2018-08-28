import React from 'react'
import { Context } from '../../util/provider'
import './style.css'

import Loading from '../../widget/loading/Loading'
import Details from './widgets/detail/detail'
import SuggestedHelpers from './widgets/suggested/suggested'

class HelperDetail extends React.Component<any> {
    componentDidMount() {
        this.props.context.actions.getDetail(this.props.match.params.id)
    }

    componentWillUnmount() {
        this.props.context.actions.unsubscribe()
    }

    render() {
        if (this.props.context.state.loading && !this.props.context.state.helper) return ( <Loading/> )
        return (
            <div className="helper-detail-container">
                <div className="helper-detail-info">
                    { this.props.context.state.helper && <Details helper={this.props.context.state.helper} /> }
                </div>

                { this.props.context.state.helpers && <SuggestedHelpers helpers={this.props.context.state.helpers} /> }
            </div>
        )
    }
}


export default (props) => (
    <Context.Consumer>
        { context => <HelperDetail context={context} {...props}  /> }
    </Context.Consumer>
)