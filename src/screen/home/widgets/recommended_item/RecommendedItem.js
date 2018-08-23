import React from 'react'
import { withRouter } from 'react-router-dom'
import logo from '../../../../assets/logo.png'
import './style.css'

class RecommendedItem extends React.Component<any> {
    navigateToHelper() {
        this.props.history.push("/helpers/" + this.props.helper.id)
    }

    render() {
        return (
            <div className="helper-list-item" onClick={this.navigateToHelper.bind(this)}>
                <img src={logo} alt="" draggable={false} />

                <div className="item-text-container">
                    <p>{ this.props.helper.name }</p>
                </div>
            </div>
        )
    }
}

export default withRouter(props => <RecommendedItem {...props} />)