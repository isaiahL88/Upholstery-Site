import React, { Component } from 'react'
import { Link } from "react-router-dom"
import resBanquet from "../assets/residential_banquet.jpg"
import sofa4 from "../assets/sofa4.jpg"
import antique from "../assets/antique_w_salon.jpg"
import "../css/Services.css"

export default class Services extends Component {
    render() {
        return (
            <div id="services-container">
                <div id="res-service" class="services">
                    <div id="services-info-res" class='services-info'>
                        <h1>Residential Furniture</h1>
                        <ul id="list-res" class="service-list">
                            <li>Upgrade uncomfortable seats with foam of your preferred density</li>
                            <li>Change cushion size, which can help with deep chairs that are hard too get out of</li>
                            <li>We do business with well established fabric manufacturers such as <Link to="https://ennisfabrics.com/">Ennis Fabrics</Link> which provide a wide selection of high quality fabric and vinyl to choose from</li>
                            <li>Finish touch-up for aged furniture to make it feel like brand new!</li>
                        </ul>
                    </div>
                    <img id="res-service-img" class="service-img" src={resBanquet} />
                </div>
                <div id="service-comercial" class="services services-right">
                    <img id="service-img-comercial" class="service-img" src={sofa4} />
                    <div id="service-info-comercial" className='services-info'>
                        <h1 id="rightHeader">Commercial Upholstery</h1>
                        <ul id="service-list-comercial" class="service-list">
                            <li>We can re-upholster restaurant banquets and even upgrade cushion and foam to your desired size / density if needed</li>
                            <li>Upgrade your high-use furniture to top notch fabric that will take on the day-to-day use</li>
                        </ul>
                    </div>
                </div>
                <div id="services-custom" class="services">
                    <h1>Custom Upholstery</h1>
                    <ul id="list-custom" class="service-list">
                        <li>Through years of experience we have learned how to work on a variety of both modern and antique pieces</li>
                        <li>We offer re-upholstery for the following:</li>
                        <ul>
                            <li>Antique Furniture</li>
                            <li>Salon Equipment</li>
                            <li>Fitness Equipment</li>
                            <li>Boat / Car Re-upholstery</li>
                        </ul>
                    </ul>
                    <img id="custom-img" class="service-img" src={antique} />
                </div>
            </div >
        )
    }
}
