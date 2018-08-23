import React from 'react'
import { FAQContext } from '../../../../util/faq'
import holiday from '../../../../assets/holiday.png'
import './style.css'

const HolidayInfo = ({ context }) => (
    <React.Fragment>
        <div className="holiday-trigger" onClick={context.actions.toggleHoliday}>
            <h3>傭工的假期</h3>
            <i className={context.state.holiday ? "fas fa-caret-up" : "fas fa-caret-down"} />
        </div>

        <div className={context.state.holiday ? "holiday-content" : "holiday-content hide"}>
            <img src={holiday} alt="" />
        </div>
    </React.Fragment>
)

export default () => (
    <FAQContext>
        { context => <HolidayInfo context={context} /> }
    </FAQContext>
)