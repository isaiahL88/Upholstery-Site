import React from 'react'
import logo from '../assets/Linares Upholstery-logos.png'
import '../css/Footer.css'

const Footer = () => {
    return (
        <div id='footer'>
            {/* <section id='section1'>
                <h2>Phone: 416-871-8564</h2>
                <h2>Email: linaresupholstery@hotmail.ca</h2>
                <h2>Located: Agincourt North, Toronto, ON</h2>
            </section> */}
            <section id='foot-section2'>
                <img id='logo' src={logo} />
                <p>Scarborough based Upholstery</p>
                <div id='footer-contact'>
                    <p id='phone'>416-873-8456</p>
                    <p id='email'>linaresupholstery@hotmail.ca</p>
                    <p>Agincourt North, Toronto, ON</p>
                </div>
                <p id='credit'>Designed by Isaiah Linares</p>
            </section>
        </div >
    )
}

export default Footer