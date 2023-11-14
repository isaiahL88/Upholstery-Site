import React, { Component } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import classicChair from "../assets/classic_chairs.jpg"
import chairBright from "../assets/nice_fabric_chairs.jpg"
import chair1 from '../assets/Chair.jpg'
import chair2 from '../assets/chair2.jpg'
import chair3 from '../assets/chair3.jpg'



export default class Portfolio extends Component {

    render() {
        return (
            <div>
                <Splide
                    options={{
                        rewind: true,
                        width: 550,
                        height: 600,
                        gap: '1rem'
                    }}
                    aria-label="chairs">
                    <SplideSlide>
                        <img src={classicChair} />
                    </SplideSlide>
                    <SplideSlide>
                        <img src={chairBright} />
                    </SplideSlide>
                </Splide>
                {/* <div id='section1'>
                    <Slide id="slideshow" >
                        <img className="slide-img" src={classicChair} />
                        <img className="slide-img" src={chairBright} />
                        <img className="slide-img" src={chair3} />
                        <img className="slide-img" src={chair2} />
                        <img className="slide-img" src={chair1} />

                    </Slide >
                </div> */}
                <div id='section2'>
                </div>
                <div id='section3'>

                </div>
            </div >
        )
    }
}
