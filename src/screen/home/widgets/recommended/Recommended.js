import React from 'react'
import { Context } from '../../../../util/provider'
import './style.css'

import Loading from '../../../../widget/loading/Loading'
import RecommendedItem from '../recommended_item/RecommendedItem'

class Recommended extends React.Component<{}> {
    componentDidMount() {
        this.props.context.actions.allFeatured()
    }

    componentWillUnmount() {
        this.props.context.actions.unsubscribe()
    }

    render() {
        const { context } = this.props
        return (
            <div className="recommended-container">
                <div className="inner">
                    <h3 className="recommended-title">推介女傭</h3>
                    <p className="recommended-description"></p>
                    { context.state.loading ?
                        <Loading />
                        :
                        <section className="helper-list-horizontal">
                            { context.state.helpers && context.state.helpers.map((helper, i) => (
                                <RecommendedItem key={i} helper={helper} />
                            ))}
                        </section>
                    }
                </div>
            </div>
        )
    }
}

export default () => (
    <Context.Consumer>
        { context => <Recommended context={context} />}
    </Context.Consumer>
)
