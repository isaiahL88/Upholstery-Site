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
import fabric from '../assets/fabric.jpeg'
import sowing from '../assets/sowing.jpeg'


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
    width: '100vw',
    height: '13em',
    gap: '1rem'
};


const mql = window.matchMedia('(max-width: 1024px)');
let mobileView = mql.matches;
const Home = () => {

    return (
        <div id="home-page">
            <div id="section-1">
                <p id="intro">30 years of specialization in restoration and commercial re-upholstery</p>
                {/* <h1 id="section-2-header">Make a worthwhile investment restoring and preserving your sentimental pieces of furniture</h1>
                <h1 id="section-3-header">Refresh your restaurant or lounge banquets with a new high quality fabric!</h1> */}
                <Splide id='splide' options={mobileView ? optionsMobile : options}>
                    <SplideSlide className='splide_slide'>
                        <img id="section-1-img" src={sofa_home} alt='30 years of specialization in restoration and commercial re-upholstery' />
                    </SplideSlide>
                    <SplideSlide>
                        <img id="section-2-img" src={sofaModern} />
                    </SplideSlide>
                    <SplideSlide>
                        <img id='section-3-img' src={sofa2} />
                    </SplideSlide>
                </Splide>
            </div>
            <div className='space'></div>
            <div id='section-2'>
                <section id='descr-2'>
                    <h1 className='section-header'>Fabrics</h1>
                    <p className='section-p'>Make a worthwhile investment restoring your sentimental pieces with fabrics from a wide selection</p>
                </section>
                <img id='img-2' src={fabric} />
            </div>
            <div className='space'></div>
            <div id='section-3'>
                <img id='img-3' src={sowing} />
                <section id='descr-3'>
                    <h1 className='section-header'>Sowing</h1>
                    <p className='section-p'>Custom sowing allows us to adjust cushion, backing, and fabric lining to perfelctly fit your needs</p>
                </section>
            </div>
        </div >
    )
}

export default Home