import React from 'react'
import { FAQContext } from '../../../../util/faq'
import './style.css'

const AfterArrival = ({ context }) => (
    <React.Fragment>
        <div className="after-arrival-trigger" onClick={context.actions.toggleAfterArrival}>
            <h3>到職後注意地方</h3>
            <i className={context.state.after_arrival ? "fas fa-caret-up" : "fas fa-caret-down"} />
        </div>

        <div className={context.state.after_arrival ? "after-arrival-content" : "after-arrival-content hide"}>
            <ol>
                <li><strong>僱主須給予外傭每星期有薪假期一天如傭工自願,是可以在休息日工作,但仍需薪金</strong></li>
                <li><strong>僱主須為外傭購買勞工保險及免費提供醫療(包括危疾及意外),所以應購買一份勞工加醫療之綜合保險,詳請可向相熟的保險從業員或經本公司介照購買</strong></li>
                <li><strong>僱主須提供外傭膳食</strong></li>
                <li><strong>女傭之薪金支付及假期補償(無論是給予現金或銀行轉賬)均須由女傭簽署為憑:</strong><ul><li>很多僱主在女傭到職後改在每月一號支付工資,但改鑾時應該先知會傭工及於一號結清之前未支付的工資</li></ul></li>
                <li><strong>外傭生病或遇到意外,僱主可安排傭工到其指定的醫生就診:</strong><ul><li>如醫生給予病假多於4天僱主應給予病假津貼,金額為每日平均工資的4/5,到職後首月可獲2天,之後每月可累積4天,最多可累積至120天</li></ul></li>
                <li><strong>外傭工作滿三個月後,則可享有法定假期(勞工假): </strong><ul><li>該假期不可用金錢替補,如需法定假日工作需於2日前通知及在60天內補假</li><li>如果與休息日重疊則另外補假</li></ul></li>
                <li><strong>外傭工作服務滿一年,則可享七天有薪年假(大假),外傭有薪年假的日數由第三年起計每年增加一日(即第三年為八日，上限為十四日):</strong><ul><li>所有未放大假需於約滿前結清,不可累積及不可與法定假期重疊</li><li>續約則需給與傭工結清年假</li></ul></li>
                <li><strong>長期服務金為女傭工作5年之後,如僱主不再續約或女傭身體經醫生證明不適合工作／超過65歲年老／其間死亡等等僱主需支付長期服務金:</strong><ul><li>計算為法為最後一個月的工資x(2/3）×年資</li><li>如僱主已書面通知女傭續約或提供新合約,女傭不合理地拒絕則無權獲得長期服務金</li></ul></li>
                <li><strong>雙方均可隨時終止合約，衹需在一個月前通知對方或補償對方一個月薪金·即可解除合約。當合約終止時僱主須處理事項：</strong><ul><li>所欠之薪金及長期服務金、假期補償:由香港返回原居地之單程機票及港幣100元之津貼</li></ul></li>
                <li><strong>如你認為對方單方面終止合約，便應通知入境事務處的外籍家庭傭工組。如傭工失蹤，僱主應考慮向警方報案</strong><ul><li>如對方沒有理由在不給予通知情況下終止合約,而想追討代通知金,便應盡快接觸所屬地區的勞資關係科分區辦事處</li><li>即時終止合約通常是由於勞資雙方意見不合而引致的.在爭吵期間,某些事情會被誇大,而任何一方均會認為有足夠理由即時終止合約或視之為終止.但這種想法往往是錯誤的</li><li>此外,在一個家庭中通常不會有獨立的證人而重組導致糾紛的事件及判斷所採取的行動是否合理亦有困難.解決糾紛的最好方法是由雙方直接把問題說出來.在雙方有分歧時應盡量體諒對方及互相容忍</li></ul></li>
            </ol>
        </div>
    </React.Fragment>
)
export default () => (
    <FAQContext>
        { context => <AfterArrival context={context} /> }
    </FAQContext>
)