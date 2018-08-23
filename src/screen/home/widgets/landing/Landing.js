import React from 'react'
import { withRouter } from 'react-router-dom'
import logo from '../../../../assets/logo.png'
import './style.css'
import './highlight.css'

const Landing = (props) => (
    <React.Fragment>
        <div className="landing-container">
            <span className="logo-container">
                <img src={logo} alt="" height="100%" width="100%" draggable={false} />
            </span>

            <span className="landing-slogan">
                <div className="company-name">
                    <h1 className="company-name-chi">金傭菲印服務有限公司</h1>
                    <h4 className="company-name-eng">Limastar Employment Agency</h4>
                </div>

                <div className="buttons">
                    {/* <button className="view-helper-btn">View Helpers</button> */}
                    <button type="button" className="faq-btn" onClick={() => props.history.push("/contacts")}>Ask us a question</button>
                </div>
                
            </span>
        </div>

        <div className="highlight">

            <div className="highlight-item">
                <h2 className="highlight-title"><i className="fas fa-users"/> 僱主親臨挑選</h2>
                <p>海外家傭或預約<br/>已在港現成女傭.</p>
            </div>

            <div className="highlight-divider"/>

            <div className="highlight-item">
                <h2 className="highlight-title"><i className="fas fa-award"/> 本公司提供專業意見及分析</h2>
                <p>當僱主配對到合適人選後<br/>即會辦理申請工作簽証文件.</p>
            </div>

            <div className="highlight-divider"/>

            <div className="highlight-item">
                <h2 className="highlight-title"><i className="far fa-calendar-alt"/> 審批時間</h2>
                <p>菲傭到港大約10星期. <br/>印傭到港大約12星期.</p>
            </div>

            <div className="highlight-divider"/>
        </div>
    </React.Fragment>
)

export default withRouter(props => <Landing {...props} />)