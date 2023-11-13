import React, { Component } from 'react'
import Portfolio from "./Portfolio.js"
import Home from "./Home.js"
import Services from "./Services.js"
import "../css/Nav.css"
import { Link, Routes, Route } from "react-router-dom"

export default class Nav extends Component {
    render() {
        return (
            <div id="nav">
                <h1 id="title">Linares Upholstery</h1>
                <ul id="links">
                    <li><Link class="links" to="/">Home</Link></li>
                    <li><Link class="links" to="/Portfolio">Portfolio</Link></li>
                    <li><Link class="links" to="/Services">Services</Link></li>
                </ul>
            </div>
        )
    }
}
