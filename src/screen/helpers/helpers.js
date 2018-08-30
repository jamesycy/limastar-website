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

    componentWillUnmount() {
        this.props.context.actions.unsubscribe()
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
                { !context.state.loading && context.state.helpers && context.state.helpers.map((helper, index) => (
                    <React.Fragment key={index}>
                        <ListItem helper={helper} />
                    </React.Fragment>
                )) }
                { this.props.context.state.helpers && this.props.context.state.helpers.length % 10 === 0 ?
                    <button className="helper-load-more" onClick={() => context.actions.loadMore()}>Load More Helpers</button>
                    :
                    <button className="helper-load-more" >No More Helpers</button>
                }
            </div>
        )
    }
}

export default () => (
    <Context.Consumer>
        { context => <HelpersPage context={context} /> }
    </Context.Consumer>
)