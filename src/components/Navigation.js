import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.svg';

function Navigation() {
  return (
    <>
    <head>
     <title>Denisa - IT Girl</title>
     </head>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" className="img-fluid" style={{ width: "100px" }} />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projects">Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/details">Details</Link>
              </li>
            </ul>
            <button className="btn-prim" type="submit">Get In Touch</button>
          </div>
        </div>
      </nav>

      

      
    </>
  );
}

export default Navigation;
