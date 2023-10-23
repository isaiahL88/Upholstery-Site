import React, { Component } from 'react'
import Portfolio from "./Portfolio.js"
import Home from "./Home.js"
import Services from "./Services.js"
import { Link, Routes, Route } from "react-router-dom"

export default class Nav extends Component {
    render() {
        return (
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Portfolio">Portfolio</Link></li>
                <li><Link to="/Services">Services</Link></li>
            </ul>
        )
    }
}
