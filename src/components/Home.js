import React, { useState, useEffect } from 'react';
import "../css/Home.css"
import { Splide, SplideSlide } from '@splidejs/react-splide'

import chair1 from '../assets/Chair.jpg'
import chair2 from '../assets/chair2.jpg'
import sofa1 from '../assets/sofa1.jpg'
import sofa2 from '../assets/sofa2.jpg'
import sofa3 from '../assets/sofa3.jpg'
import sofa4 from '../assets/sofa4.jpg'
import sofa_home from '../assets/sofa_home_page.jpg'
import sofaModern from '../assets/modern_sofa.jpg'

import 'react-slideshow-image/dist/styles.css'

const options = {
    type: 'loop',
    width: '100vw',
    height: '30em',
    gap: '1rem',
    interval: 4000,
    speed: 30,
    autoplay: "play"
};

const optionsMobile = {
    type: 'loop',
    width: '80vw',
    height: '60vh',
    gap: '1rem'
};
const Home = () => {

    return (
        <div id="home-page">
            <div id="section-1">
                <Splide id='splide' options={options}>
                    <SplideSlide>
                        {/* <p id="intro">30 years of specialization in restoration and commercial re-upholstery</p> */}
                        <img id="section-1-img" src={sofa_home} />
                    </SplideSlide>
                    <SplideSlide>
                        {/* <h1 id="section-2-header">Make a worthwhile investment restoring and preserving your sentimental pieces of furniture</h1> */}
                        <img id="section-2-img" src={sofaModern} />
                    </SplideSlide>
                    <SplideSlide>
                        {/* <h1 id="section-3-header">Refresh your restaurant or lounge banquets with a new high quality fabric!</h1> */}
                        <img id='section-3-img' src={sofa2} />
                    </SplideSlide>
                </Splide>
            </div>
        </div >
    )
}

export default Home