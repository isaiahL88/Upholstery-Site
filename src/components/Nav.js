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
                <ul id="links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Portfolio">Portfolio</Link></li>
                    <li><Link to="/Services">Services</Link></li>
                </ul>
                <h1 id="title">Linares Upholstery</h1>
            </div>
        )
    }
}
