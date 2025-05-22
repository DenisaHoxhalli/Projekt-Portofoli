import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone }  from '@fortawesome/free-solid-svg-icons';


function Footer() {
    return (
        <>
        {/* Footer */}
             <footer style={{ color: "#fff" }} id="contact" className="footer_wrapper mt-md-0 pb-0">
               <div className="container pb-3">
                 <div className="row">
                   <div className="col-lg-4 col-md-6">
                     <h5>
                       <img src={logo} width="150px" alt="Logo" />
                     </h5>
                     <p className="ps-0 text-start">
                       
                     </p>
                   </div>
       
                   <div className="col-lg-4 col-md-6 media">
                     <h5 style={{ color: "#FF7E5F" }}>Get In Touch:</h5>
                     <div className="contact-info mt-4">
                       <h6> <FontAwesomeIcon icon={faEnvelope} />
                       <a href="https://mail.google.com/mail/?view=cm&fs=1&to=no-reply@example.com" target="_blank">
                         denisahoxhalli009@gmail.com
                      </a>
                       </h6>
                       <h6><FontAwesomeIcon icon={faPhone} />
                         <a href="tel:+355692020140">
                         +355 68 38 48 220</a>
                       </h6>
                     </div>
                   </div>
       
                   <div className="col-lg-4 col-md-6 media">
                     <h5 style={{ color: "#FF7E5F" }}>Menu:</h5>
                     <ul className="links p-0">
                     <Link className="nav-link" to="/">Home</Link>
                     <Link className="nav-link" to="/about">About</Link>
                     <Link className="nav-link" to="/contact">Contact</Link>
                     <Link className="nav-link" to="/projects">Projects</Link>
                     <Link className="nav-link" to="/details">Details</Link>
                       
                     </ul>
                   </div>
                 </div>
               </div>
       
               <hr />
                <div className="container-fluid copyright-section">
                 <p style={{ fontSize: "medium", color: "whitesmoke", textAlign: "center" }}>
                   Copyright © {new Date().getFullYear()} Denisa - IT Girl | Powered
                   by Denisa Hoxhalli
                 </p>
               </div>
             </footer>
             </>
    )
}
export default Footer;