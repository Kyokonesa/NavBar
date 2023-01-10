import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container">
        <img src="/assets/landinglogo.png" alt="nav_logo" style={{width: "110px", height: "50px", marginRight: "400px", marginLeft: "150px"}}/>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{float: "right"}}>
            <li className="nav-item" >
              <NavLink className="nav-link active" aria-current="page" to="/news" style={{color: "white"}}>
                News
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/vision" style={{color: "white"}}>
                Vision
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login" style={{color: "white"}}>
                Login
              </NavLink>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
