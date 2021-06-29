import React from "react";
import "../components/navbar.css";
import logo from "../Assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img className="logo" src={logo} />
      </div>
      <ul className="nav-section1">
        <li>
          <a href="#">My jobs</a>
        </li>
        <li>
          <a href="#">Create a Project</a>
        </li>
      </ul>
      <div className="nav-section2">
        <button className="login-button">Log in</button>
      </div>
    </nav>
  );
};

export default Navbar;
