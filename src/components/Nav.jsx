import React from "react";
import "./Nav.css";

import logo from "../assets/r1.png";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav">
      {/* LOGO */}
       <Link to="/">
    <img src={logo} alt="logo" className="nav-logo" />
  </Link>

      {/* LINKS */}
      <div className="nav-links">
        
         <Link to="/"><a>Home</a></Link>

      <Link to="/about"><a>About</a></Link>
      <Link to="/services"><a>Services</a></Link>
        
        <a>Portfolio</a>
        
        <a>Contact</a>

        <button className="nav-btn">Get Started</button>
      </div>
    </nav>
  );
}

export default Nav;