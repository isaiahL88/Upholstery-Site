import './App.css';
import Nav from './components/Nav.js';
import Portfolio from "./components/Portfolio"
import Home from "./components/Home"
import Services from "./components/Services"
import { Route, Link, Routes } from "react-router-dom"
import SmoothScrollbar from './components/SmoothScrollBar';

function App() {
  return (
    <>
      <SmoothScrollbar>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </SmoothScrollbar>
    </>
  );
}

export default App;
