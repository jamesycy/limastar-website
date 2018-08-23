import React from 'react'
import { withRouter } from 'react-router-dom'
import logo from '../../../assets/logo.png'

const ListItem = (props) => (
    <div className="helpers-list-item" onClick={() => props.history.push("/helpers/" + props.helper.id)}>
        { props.helper.photo ?
            <img src={props.helper.photo} alt="" className="avatar-placeholder" />
            :
            <img src={logo} alt="" className="avatar-placeholder" />
        }
        <span>
            <h2>{ props.helper.name } ({props.helper.nationality})</h2>
            <h3>{ props.helper.experience }</h3>
            <h3> <b>Categories</b> - { props.helper.category.map(cat => cat + ", " )}</h3>
        </span>
    </div>
)

export default withRouter(props => <ListItem {...props} />)