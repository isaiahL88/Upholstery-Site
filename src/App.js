import './App.css';
import Nav from './components/Nav.js';
import Portfolio from "./components/Portfolio"
import Home from "./components/Home"
import Services from "./components/Services"
import About from "./components/About"
import Footer from "./components/Footer"
import { Route, Link, Routes } from "react-router-dom"
import { Scrollbar } from 'smooth-scrollbar-react';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <Scrollbar>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Scrollbar>
      <Analytics />
    </>
  );
}

export default App;
