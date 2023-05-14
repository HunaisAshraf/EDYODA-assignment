import React from "react";
import logo from "../icons/logo.svg";
import "./styles/navbar.css";
import vector from "../icons/Vector.svg";
import search from "../icons/Vectorsearch.svg"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container collapse navbar-collapse">
        <div className="left-content">
          <ul>
            <li>
              <a href="#logo">
                <img src={logo} alt="" />
              </a>
            </li>
            <li>
              <a href="#course">
                courses
                <img className="vector" src={vector} alt="" />
              </a>
            </li>
            <li>
              <a href="#programs">
                Programs
                <img className="vector" src={vector} alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div className="right-content">
            <ul>
                <li>
                    <img src={search} alt="" />
                </li>
                <li>
                    <a href="#login">
                        Log In
                    </a>
                </li>
                <li>
                    <button className="nav-btn">
                        JOIN NOW
                    </button>
                </li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
