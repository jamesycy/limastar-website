import React from 'react'
import { FAQContext } from '../../../../util/faq'
import './style.css'

const ServiceInfo = ({ context }) => (
    <React.Fragment>
        <div className="service-trigger" onClick={context.actions.toggleService}>
            <h3>服務範圍</h3>
            <i className={context.state.service ? "fas fa-caret-up" : "fas fa-caret-down"} />
        </div>

        <div className={context.state.service ? "service-content" : "service-content hide"}>
            <section><h3><span class="icon is-large has-text-info"><i class="far fa-thumbs-up fa-lg"/></span> 海外菲律賓印尼家傭</h3><ul><li>領事館之合約公證費</li><li>入境事務處之工作簽證費用</li><li>外傭出境所需手續費用及證明文件費用</li><li>傭來港之單程機票及稅項</li><li>代接機至本公司及協辦身份証及報到</li><li>協辦家傭保險、更新護照</li><li>外傭上班後跟進及輔導服務</li></ul></section>
            <section><h3><span class="icon is-large has-text-info"><i class="far fa-thumbs-up fa-lg"/></span> 本地菲律賓印尼家傭</h3><ul><li>領事館之合約公證費</li><li>入境事務處之工作簽證費用</li><li>到職前接送至本公司之費用</li><li>代訂來回機粟及跟進出入境事宜</li><li>協辦家傭保險 </li><li>外傭上班後跟進及輔導服務</li></ul></section>
            <section><h3><span class="icon is-large has-text-info"><i class="far fa-thumbs-up fa-lg"/></span> 續約／代辦轉換僱主手續</h3><ul><li>領事館之合約公證費</li><li>入境事務處之工作簽證費用</li><li>菲律賓領事館之OWWA費用</li><li>代辦因僱主身故、永久離關香港或自行轉介之本地家傭申請手續</li></ul></section>
            <section><h3><span class="icon is-large has-text-info"><i class="far fa-thumbs-up fa-lg"/></span> 申請指定海外家傭<strong>(Direct Hiring)</strong></h3><ul><li>領事館之合約公證費</li><li>入境事務處之工作簽證費用</li><li>聯絡家傭報到當地公司辦理出境手續及課程</li><li>代接機至本公司及協辦身份証及報到</li><li>協辦家傭保險</li></ul></section>
        </div>
    </React.Fragment>
)

export default () => (
    <FAQContext>
        { context => <ServiceInfo context={context} /> }
    </FAQContext>
)