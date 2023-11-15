import React from 'react'
import aboutPic from '../assets/sofa_home_page.jpg'
import "../css/About.css"
const About = () => {
    return (
        <div>
            <div id="page1">
                <div id="about">
                    <h1 id='about-header'>About</h1>
                    <img id='about-pic' src={aboutPic} />
                    <p id='about-descr'>Hi, my name is Mario and Linares Upholstery is my
                        family business based in the Scarborough area that I have been
                        running for 30 years now. I specialize in re-upholstery
                        and have experience with a wide variety of residential furniture,
                        fabrics, commercial furniture, and antique pieces. If you or your
                        business is in need of an upgrade from old worn fabric and
                        damp cushions please give me a call so we can arrange an estimate.
                        I also have extensive experience with antiques, so if you have any
                        sentimental pieces you would like to refresh please make an appointment
                        for an estimate as well.</p>
                </div>
                <div id="contact">
                    <div id='message-div'>
                        <svg id="message-popup" width="606" height="270" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="302.5" cy="125.5" rx="214.5" ry="72.5" fill="#CCC5A0" />
                            <path d="M539.904 206.859L391.076 188.256L496.822 148.601L539.904 206.859Z" fill="#CCC5A0" stroke="#CCC5A0" />
                            <text fontFamily="Inter" id="popup-text" x="50%" y="45%" fontSize="18px" alignment-baseline="middle" text-anchor="middle">Please call or email to arrange an estimate!</text>
                        </svg>
                    </div>
                    <h1 id='contact-header'>Contact Information</h1>
                    <p>cell: 416-871-7564</p>
                    <p>email: linaresupholstery@hotmail.ca</p>
                    <iframe id='google-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11517.987348051303!2d-79.27701952853488!3d43.804052821895596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d1415790b97f%3A0x15d1f81f3695e3a3!2sAgincourt%20North%2C%20Toronto%2C%20ON!5e0!3m2!1sen!2sca!4v1700084500116!5m2!1sen!2sca" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div id="page 2">
            </div>
        </div >
    )
}
export default About;