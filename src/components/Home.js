import React from 'react'
import "../css/Home.css"
import { Slide } from 'react-slideshow-image';
import chair1 from '../assets/Chair.jpg'
import chair2 from '../assets/chair2.jpg'
import sofa1 from '../assets/sofa1.jpg'
import sofa2 from '../assets/sofa2.jpg'
import sofa3 from '../assets/sofa3.jpg'
import sofa4 from '../assets/sofa4.jpg'
import sofa_home from '../assets/sofa_home_page.jpg'
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
            <div id="slide-container">
                <Slide {...properties} id="slideshow" >
                    <div class="img-container" key='1'>
                        <img className="div_style" src={chair1}>
                        </img>
                    </div>
                    <div class="img-container" key='2'>
                        <img className="div_style" src={chair2}>
                        </img>
                    </div>
                    <div class="img-container" key='3'>
                        <img className="div_style" src={sofa1}>
                        </img>
                    </div>
                    <div class="img-container" key='4'>
                        <img className="div_style" src={sofa2}>
                        </img>
                    </div>
                    <div class="img-container" key='5'>
                        <img className="div_style" src={sofa3}>
                        </img>
                    </div>
                    <div class="img-container" key='6'>
                        <img className="div_style" src={sofa4}>
                        </img>
                    </div>

                </Slide >
            </div>
        </div >
    )
}

export default Home