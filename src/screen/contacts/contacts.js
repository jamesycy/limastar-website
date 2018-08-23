import React from 'react'
import './style.css'

export default class ContactsPage extends React.Component<any> {
    render() {
        return (
            <div className="contacts-container">
                <div className="contacts-title-wrapper">
                    <h2>Contact Us</h2>
                    <hr/>
                </div>

                <div className="contacts-content-wrapper">
                    <section className="contacts-content">
                        <h2>九龍城店</h2>
                        <ul>
                            <li><span className="icon"><i className="fas fa-location-arrow"></i></span> <strong>地址: </strong> 九龍城衙前圍道114號1樓 (九龍城街市旁,面向衙前圍道 萬寧樓上)</li>
                            <li><span className="icon"><i className="fas fa-mobile-alt"></i></span> <strong>電話 Tel: </strong>  <a href="tel://23825522">2382 5522</a></li>
                            <li><span className="icon"><i className="fab fa-whatsapp"></i></span> <strong>Whatsapp號碼: </strong>  <a href="whatsapp://send?abid=+85292873222&amp;text=Hello">9287 3222</a></li>
                            <li><span className="icon"><i className="far fa-envelope"></i></span> <strong>電郵地址: </strong>  <a href="mailto:enquiry@staremploy.com?Subject=Enquiry">enquiry@staremploy.com</a></li>
                            <li><span className="icon"><i className="far fa-building"></i></span> <strong>辦公時間 Office Hour: </strong>  星期一至六(MON-SAT)  10:30 a.m. – 7:30 p.m , 星期日(SUN)  11:30am- 7:30 p.m.</li>
                        </ul>
                    </section>

                    <section className="contacts-content">
                        <h2>旺角店</h2>
                        <ul>
                            <li><span className="icon"><i className="fas fa-location-arrow"></i></span> <strong>地址: </strong> 九龍旺角太平道5號</li>
                            <li><span className="icon"><i className="fas fa-mobile-alt"></i></span> <strong>電話 Tel: </strong>  <a href="tel://23821880">2385 1880</a></li>
                            <li><span className="icon"><i className="fab fa-whatsapp"></i></span> <strong>Whatsapp號碼: </strong>  <a href="whatsapp://send?abid=+85260616688&amp;text=Hello">9179 9922</a></li>
                            <li><span className="icon"><i className="far fa-envelope"></i></span> <strong>電郵地址: </strong>  <a href="mailto:limastaragency@gmail.com?Subject=Enquiry">enquiry@staremploy.com</a></li>
                            <li><span className="icon"><i className="far fa-building"></i></span> <strong>辦公時間 Office Hour: </strong>  星期一至六(MON-SAT)  10:30 a.m. – 7:30 p.m , 星期日(SUN)  11:30am- 7:30 p.m.</li>
                        </ul>
                    </section>
                </div>
            </div>
        )
    }
}