import React, { useState, useEffect } from 'react';
import "../css/Home.css"
import { Slide } from 'react-slideshow-image';
import chair1 from '../assets/Chair.jpg'
import chair2 from '../assets/chair2.jpg'
import sofa1 from '../assets/sofa1.jpg'
import sofa2 from '../assets/sofa2.jpg'
import sofa3 from '../assets/sofa3.jpg'
import sofa4 from '../assets/sofa4.jpg'
import sofa_home from '../assets/sofa_home_page.jpg'
import sofaModern from '../assets/modern_sofa.jpg'

import 'react-slideshow-image/dist/styles.css'
const buttonStyle = {
    width: "100px",
    height: "100px",
    padding: "0px",
    margin: "0px",

    background: 'none',
    border: '0px',
};

const properties = {
    prevArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" height="100" viewBox="0 -960 960 960" width="100"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" /></svg></button>,
    nextArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" height="100" viewBox="0 -960 960 960" width="100"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg></button>
}

const Home = () => {

    return (
        <div id="home-page">
            <p id="intro">30 years of specialization in restoration and commercial re-upholstery</p>
            <div id="section-1">
                <img id="section-1-img" src={sofa_home} />
            </div>
            <h1 id="section-2-header">Make a worthwhile investment restoring and preserving your sentimental pieces of furniture</h1>
            <div id="section-2">
                <img id="section-2-img" src={sofaModern} />
            </div>
            <h1 id="section-3-header">Refresh your restaurant or lounge banquets with a new high quality fabric!</h1>
            <div id="section-3">
                <img id='section-3-img' src={sofa2} />
            </div>
        </div >
    )
}

export default Home