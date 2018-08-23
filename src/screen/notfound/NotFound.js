import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const NotFound = () => (
    <div className="notfound-container">
        <h1>The page you looking for does not exist.</h1>
        <h2>You can click <Link to="/">here</Link> to go back to home page.</h2>
    </div>
)

export default NotFound