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
                <div class="services">
                    <h1>Residential Furniture</h1>
                    <ul class="service-list">
                        <li>Upgrade uncomfortable seat foam, you can chose from a variety of foam density to replace in your pieces of furniture.</li>
                        <li>Change cushion size, which can help with deep chairs that are hard to get out of.</li>
                        <li>We do business with well established Fabric manufacturers such as Ennis Fabrics which provide a wide selection to choose from. <Link to="https://ennisfabrics.com/">Ennis Fabrics</Link></li>
                        <li>Finish touch up for aged furniture to make it feel like brand new!</li>
                        <li>We have experience with the following: </li>
                    </ul>
                    <img class="service-img" src={resBanquet} />
                </div>
                <div class="services services-right">
                    <h1 id="rightHeader">Commercial Upholstery</h1>
                    <img class="service-img" src={sofa4} />
                    <ul class="service-list">
                        <li>We can re-upholster resturant banquets and even upgrade cushion or foam to your desired size or density if needed</li>
                        <li>Upgrade your high use furniture to top knotch fabric that will take on the day-to-day use</li>
                        <li></li>
                    </ul>
                </div>
                <div class="services">
                    <h1>Custom Upholstery</h1>
                    <ul class="service-list">
                        <li>Through years of experience we have learned how to work on a variety of both modern and antique pieces</li>
                        <li>We offer re-upholstery for the following:</li>
                        <ul>
                            <li>Antique Furniture</li>
                            <li>Salon Equipment</li>
                            <li>Fitness Equipment</li>
                            <li>Boat / Car Re-upholstery</li>
                        </ul>
                    </ul>
                    <img class="service-img" src={antique} />
                </div>
            </div >
        )
    }
}
