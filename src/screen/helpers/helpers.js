import React from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../util/provider'
import './style.css'

import Loading from '../../widget/loading/Loading'
import ListItem from './widgets/listitem'

class HelpersPage extends React.Component<any> {
    componentDidMount() {
        this.props.context.actions.allHelpers()
    }

    render() {
        const { context } = this.props
        return (
            <div className="helpers-container">
                <div className="helpers-title-row">
                    <h2 className="helpers-title">Helpers</h2>
                    <Link to="/search"><i className="fas fa-filter"/></Link>
                </div>
                { context.state.loading && <Loading/> }
                { context.state.helpers && context.state.helpers.map((helper, index) => (
                    <React.Fragment key={index}>
                        <ListItem helper={helper} />
                        <ListItem helper={helper} />
                        <ListItem helper={helper} />
                        <ListItem helper={helper} />
                        <ListItem helper={helper} />
                        <ListItem helper={helper} />
                        <ListItem helper={helper} />
                        <ListItem helper={helper} />
                        <ListItem helper={helper} />
                        <ListItem helper={helper} />
                    </React.Fragment>
                )) }
            </div>
        )
    }
}

export default () => (
    <Context.Consumer>
        { context => <HelpersPage context={context} /> }
    </Context.Consumer>
)