import './App.css';
import Nav from './components/Nav.js';
import Portfolio from "./components/Portfolio"
import Home from "./components/Home"
import Services from "./components/Services"
import { Route, Link, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
}

export default App;
