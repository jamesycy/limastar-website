import React from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../../../util/provider'
import './style.css'

import Loading from '../../../../widget/loading/Loading'

class SuggestedHelpers extends React.Component<> {
    render() {
        const { loading, helpers } = this.props.context.state
        return (
            <div className="helper-detail-suggested">
                <h2>Other helpers that you might like</h2>
                <hr/>
                { loading ?
                    <Loading />
                :
                    <div className="helper-detail-list">
                        { helpers.length <= 0 && <h4>There are no helper that match the criteria.</h4> }
                        { helpers.map(
                            (helper, index) => (
                                <Link to={`/helpers/${helper.id}`} className="helper-detail-link">
                                    <div key={index} className="helper-detail-list-item">
                                        { helper.avatar ? <img src={helper.avatar} alt="" className="photo" /> : <span className="photo"/> }
                                        <h2>{ helper.name }</h2>
                                        <h3>{ helper.nationality }</h3>
                                    </div>
                                </Link>
                            )
                        )}
                    </div>
                }
            </div>
        )
    }
}

export default () => (
    <Context.Consumer>
        { context => <SuggestedHelpers context={context} /> }
    </Context.Consumer>
)