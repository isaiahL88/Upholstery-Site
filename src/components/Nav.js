import React, { useState, useEffect, Component } from 'react';
import Home from "./Home.js"
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
        console.log("click");

    }
    render() {
        return (
            <div id="nav">
                <h1 id="title">Linares Upholstery</h1>
                <ul className={this.state.burgerOpen ? "nav-active nav-links" : "nav-links"}>
                    <li><Link class="links" to="/">Home</Link></li>
                    <li><Link class="links" to="/Services">Services</Link></li>
                    <li><Link class="links" to="/Portfolio">Portfolio</Link></li>
                    <li><Link class="links" to="/About">About</Link></li>
                </ul>
                {/* onClick={this.setState(prevState => ({
                    burgerOpen: !prevState.burgerOpen
                }))} */}
                <div className="burger" onClick={this.handleBurger}>
                    <div class={this.state.burgerOpen ? "line1 toggle" : "line1"}></div>
                    <div class={this.state.burgerOpen ? "line2 toggle" : "line2"}></div>
                    <div class={this.state.burgerOpen ? "line3 toggle" : "line3"}></div>
                </div>
            </div >
        )
    }


}
