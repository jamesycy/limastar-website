import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => (
  <React.Fragment>
    <Link to="/helpers" className="back-link">{"<"} Back</Link>
    <h2 className="helper-detail-title">{ props.helper.name }</h2>
    <hr/>
    <div className="helper-detail-content">
        <img className="helper-detail-biodata" src={props.helper.avatar} alt="" draggable={false} />
        <div className="helper-detail-text-container">
            <h3><b>Name:</b> { props.helper.name }</h3>
            <h3><b>Nationality:</b> { props.helper.nationality }</h3>
            <h3><b>Experience:</b> { props.helper.experience }</h3>
            {/* { props.helper.category && 
                <h3><b>Category:</b> { props.helper.category.map(cat => (
                    cat + ", "
                ))}</h3>
            } */}
        </div>
    </div>
  </React.Fragment>
)
