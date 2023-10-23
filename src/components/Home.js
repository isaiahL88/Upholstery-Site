import React from 'react'
import "../css/Home.css"
import { Slide } from 'react-slideshow-image';
import chair1 from '../assets/Chair.jpg'
import chair2 from '../assets/chair2.jpg'
import sofa1 from '../assets/sofa1.jpg'
import sofa2 from '../assets/sofa2.jpg'
import sofa3 from '../assets/sofa3.jpg'
import sofa4 from '../assets/sofa4.jpg'
import 'react-slideshow-image/dist/styles.css'

const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
}
const slideImages = [
    {
        src: chair1,
        caption: 'Slide 1'
    },
    {
        src: chair2,
        caption: 'Slide 2'
    },

];

const Home = () => {
    return (
        <div id="home-page">
            <h1>Linares Upholstery</h1>
            <Slide id="slideshow">
                <div key='1'>
                    <img className="div_style" src={chair1}>
                    </img>
                </div>
                <div key='2'>
                    <img className="div_style" src={chair2}>
                    </img>
                </div>
                <div key='3'>
                    <img className="div_style" src={sofa1}>
                    </img>
                </div>
                <div key='4'>
                    <img className="div_style" src={sofa2}>
                    </img>
                </div>
                <div key='5'>
                    <img className="div_style" src={sofa3}>
                    </img>
                </div>
                <div key='6'>
                    <img className="div_style" src={sofa4}>
                    </img>
                </div>



            </Slide >
        </div >
    )
}

export default Home