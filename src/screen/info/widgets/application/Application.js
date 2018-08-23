import React from 'react'
import { FAQContext } from '../../../../util/faq'
import rundown from '../../../../assets/rundown.jpg'
import './style.css'

const ApplicationInfo = ({ context }) => (
    <React.Fragment>
        <div className="application-trigger" onClick={context.actions.toggleApplication}>
            <h3>申請程序/需知</h3>
            <i className={context.state.application ? "fas fa-caret-up" : "fas fa-caret-down"} />
        </div>

        <div className={context.state.application ? "application-content" : "application-content hide"}>
            <img src={rundown} alt="" />
            <h2 className="application-title"><span class="icon"><i class="fa fa-retweet"/></span> 申請程序</h2>
            <ol><li><strong>僱主親臨挑選</strong><ul><li>海外家傭或預約已在港現成女傭</li></ul></li><li><strong>本公司提供專業意見及分析</strong><ul><li>當僱主配對到合適人選後,即會辦理申請工作簽証文件</li></ul></li><li><strong>女傭落實接受聘請</strong><ul><li>馬上進行申請手續.待領事館批核及入境處發出簽證後,本公司會安排女傭盡快到港</li></ul></li><li><strong>審批時間</strong><ul><li>菲傭到港大約10星期</li><li>印傭到港大約12星期</li></ul></li></ol>
        </div>
    </React.Fragment>
)

export default () => (
    <FAQContext>
        { context => <ApplicationInfo context={context} /> }
    </FAQContext>
)