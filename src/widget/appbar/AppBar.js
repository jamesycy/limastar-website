import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import logo from '../../assets/logo.png'
import './style.css'
import './sidebar.css'

type State = {
    sideBar: bool
}

class AppBar extends React.Component<any, State> {
    state = {
        sideBar: false
    }

    toggle: Function = () => {
        this.setState({ sideBar: !this.state.sideBar })
    }

    render() {
        return (
            <React.Fragment>
                <div className={this.state.sideBar ? "overlay-container" : "overlay-container hidden"}>
                    <div className={this.state.sideBar ? "sidebar" : "sidebar hidden"}>
                        <li>
                            <Link to="/"><i className="fas fa-home" /> Home</Link>
                        </li>
                        <li>
                            <Link to="/search"><i className="fas fa-search" /> Search</Link>
                        </li>
                        <li>
                            <Link to="/helpers"><i className="far fa-grin" /> Helpers</Link>
                        </li>
                        <li>
                            <Link to="/info"><i className="fas fa-concierge-bell" /> FAQ</Link>
                        </li>
                        <li>
                            <Link to="/contacts"><i className="fas fa-mobile-alt" /> Contacts</Link>
                        </li>
                    </div>

                    <div className={this.state.sideBar ? "overlay" : "overlay hidden"} onClick={this.toggle}>
                    </div>
                </div>

                <div className={this.props.location.pathname === "/" ? "navbar" : "navbar with-border"}>
                    <button className="mobile-left" onClick={this.toggle}>
                        <i className="fas fa-bars" />
                    </button>

                    { this.props.location.pathname !== "/" ? 
                        <Link to="/" className="logo-container">
                            <img src={logo} width="auto" height="100%" alt="" draggable={false} />
                        </Link>
                        :
                        <span></span>
                    }

                    <span className="mobile-right">
                    
                    </span>

                    <span className="links">
                        <li>
                            <Link to="/search"><i className="fas fa-search" /> Search</Link>
                        </li>
                        <li>
                            <Link to="/helpers"><i className="far fa-grin" /> Helpers</Link>
                        </li>
                        <li>
                            <Link to="/info"><i className="fas fa-concierge-bell" /> FAQ</Link>
                        </li>
                        <li>
                            <Link to="/contacts"><i className="fas fa-mobile-alt" /> Contacts</Link>
                        </li>
                    </span>
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(props => <AppBar {...props} />)