import React, { Component } from 'react'
import { Slide } from 'react-slideshow-image';

import "../css/Portfolio.css"
import classicChair from "../assets/classic_chairs.jpg"
import chairBright from "../assets/nice_fabric_chairs.jpg"



const properties = {
    prevArrow: <button className='slideButtons'><svg xmlns="http://www.w3.org/2000/svg" height="100" viewBox="0 -960 960 960" width="100"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" /></svg></button>,
    nextArrow: <button className='slideButtons'><svg xmlns="http://www.w3.org/2000/svg" height="100" viewBox="0 -960 960 960" width="100"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" /></svg></button>
}

export default class Portfolio extends Component {

    render() {
        return (
            <div>
                <div id='section1'>
                    <Slide {...properties} id="slideshow" >
                        <div class="slide-container" key='1'>
                            <img className="slide-img" src={classicChair} />
                        </div>
                        <div class="slide-container" key='2'>
                            <img className="slide-img" src={chairBright} />
                        </div>
                    </Slide >
                </div>
                <div id='section2'>
                </div>
                <div id='section3'>

                </div>
            </div>
        )
    }
}
