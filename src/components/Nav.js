import React, { useState, useEffect, Component } from 'react';
import Home from "./Home.js"
import logo from '../assets/Linares Upholstery-logos.png'
import Services from "./Services.js"
import About from "./About.js"
import "../css/Nav.css"
import { Link, Routes, Route } from "react-router-dom"
import { Slide } from 'react-slideshow-image';

export default class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            burgerOpen: false
        }
        this.handleBurger = this.handleBurger.bind(this);

    }
    handleBurger = () => {
        const nav = document.querySelector(".nav-links");

        const navLinks = document.querySelectorAll(".nav-links li");

        this.setState((prevState) => ({
            burgerOpen: !prevState.burgerOpen
        }));

        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.6}s`;
            }
        });

    }
    render() {
        return (
            <div id="nav">
                <div id='logo-box'>
                    <img id='nav-logo' src={logo} />
                    <p id='slogan'>Scarborough based Upholstery</p>
                </div>
                <ul className={this.state.burgerOpen ? "nav-links" : "nav-links"}>
                    <li><Link onClick={this.handleBurger} class="links" to="/">Home</Link></li>
                    <li><Link onClick={this.handleBurger} class="links" to="/Services">Services</Link></li>
                    <li><Link onClick={this.handleBurger} class="links" to="/Portfolio">Portfolio</Link></li>
                    <li><Link onClick={this.handleBurger} class="links" to="/About">About</Link></li>
                </ul>
                {/* onClick={this.setState(prevState => ({
                    burgerOpen: !prevState.burgerOpen
                }))} */}
                <div className={this.state.burgerOpen ? "burger toggle" : "burger"} onClick={this.handleBurger}>
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line3"></div>
                </div>
            </div >
        )
    }


}
