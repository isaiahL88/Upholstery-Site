import React, { Component } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import classicChair from "../assets/classic_chairs.jpg"
import chairBright from "../assets/nice_fabric_chairs.jpg"
import chair1 from '../assets/Chair.jpg'
import chair2 from '../assets/chair2.jpg'
import chair3 from '../assets/chair3.jpg'
import sofa1 from '../assets/sofa1.jpg'
import sofa2 from '../assets/sofa2.jpg'
import sofa3 from '../assets/sofa3.jpg'
import sofa4 from '../assets/sofa4.jpg'
import sofa_home from '../assets/sofa_home_page.jpg'
import sofaModern from '../assets/modern_sofa.jpg'
import sofaAntique from '../assets/antique_sofa.jpg'
import sofaAntique2 from '../assets/antique_sofa_2.jpg'
import banquet1 from '../assets/residential_banquet.jpg'
import banquet2 from '../assets/banquet2.jpg'
import banquet3 from '../assets/banquet3.jpg'
import banquet4 from '../assets/banquet4.jpg'
import banquet5 from '../assets/banquet5.jpg'
import antiqueSet1 from '../assets/antique_set.jpg'
import antiqueSet2 from '../assets/antique_set2.jpg'
import antiqueSet3 from '../assets/antique_set3.jpg'
import antiqueChair from '../assets/antique_chair.jpg'
import antiqueChair2 from '../assets/antique_chair2.jpg'
import antiqueChair3 from '../assets/antique_chair3.jpg'

import "../css/Portfolio.css"

const mql = window.matchMedia('(max-width: 600px)');
let mobileView = mql.matches;

const options = {
    type: 'loop',
    width: '30vw',
    height: '50vh',
    gap: '1rem'
};

const optionsMobile = {
    type: 'loop',
    width: '80vw',
    height: '60vh',
    gap: '1rem'
};
export default class Portfolio extends Component {

    render() {
        return (
            <div>
                <div id='section1'>
                    <div className='slider-container'>
                        <h1>Chairs</h1>
                        <Splide id='splide-chairs' className='splide'
                            options={mobileView ? optionsMobile : options}
                            aria-label="chairs">
                            <SplideSlide >
                                <img class="slide-img" src={classicChair} />
                            </SplideSlide>
                            <SplideSlide >
                                <img class="slide-img" src={chairBright} />
                            </SplideSlide>
                            <SplideSlide >
                                <img class="slide-img" src={chair1} />
                            </SplideSlide> <SplideSlide >
                                <img class="slide-img" src={chair2} />
                            </SplideSlide> <SplideSlide >
                                <img class="slide-img" src={chair3} />
                            </SplideSlide>
                        </Splide>
                    </div>
                    <div className='slider-container'>
                        <h1>Sofas</h1>
                        <Splide id='splide-sofas' className='splide'
                            options={mobileView ? optionsMobile : options}
                            aria-label="chairs">
                            <SplideSlide >
                                <img class="slide-img" src={sofa1} />
                            </SplideSlide>
                            <SplideSlide >
                                <img class="slide-img" src={sofa2} />
                            </SplideSlide>
                            <SplideSlide >
                                <img class="slide-img" src={sofaAntique} />
                            </SplideSlide> <SplideSlide >
                                <img class="slide-img" src={sofa3} />
                            </SplideSlide> <SplideSlide >
                                <img class="slide-img" src={sofaAntique2} />
                            </SplideSlide>
                        </Splide>
                    </div>
                </div>
                <div id='section2'>
                    <div className='slide-container'>
                        <h1>Banquets</h1>
                        <Splide id='splide-banquets' className='sofas splide'
                            options={mobileView ? optionsMobile : options}
                            aria-label="chairs">
                            <SplideSlide >
                                <img class="slide-img" src={banquet1} />
                            </SplideSlide>
                            <SplideSlide >
                                <img class="slide-img" src={banquet2} />
                            </SplideSlide>
                            <SplideSlide >
                                <img class="slide-img" src={banquet3} />
                            </SplideSlide> <SplideSlide >
                                <img class="slide-img" src={banquet4} />
                            </SplideSlide> <SplideSlide >
                                <img class="slide-img" src={banquet5} />
                            </SplideSlide>
                        </Splide>
                    </div>
                    <div className='slide-container'>
                        <h1>Antiques</h1>
                        <Splide id='splide-antique' className='splide'
                            options={mobileView ? optionsMobile : options}
                            aria-label="chairs">
                            <SplideSlide >
                                <img class="slide-img" src={antiqueSet3} />
                            </SplideSlide>
                            <SplideSlide >
                                <img class="slide-img" src={antiqueSet2} />
                            </SplideSlide>
                            <SplideSlide >
                                <img class="slide-img" src={antiqueChair} />
                            </SplideSlide> <SplideSlide >
                                <img class="slide-img" src={antiqueChair2} />
                            </SplideSlide> <SplideSlide >
                                <img class="slide-img" src={antiqueChair3} />
                            </SplideSlide>
                            <SplideSlide >
                                <img class="slide-img" src={antiqueSet1} />
                            </SplideSlide>
                        </Splide>
                    </div>
                </div>
                <div id='section3'>

                </div>
            </div >
        )
    }
}
