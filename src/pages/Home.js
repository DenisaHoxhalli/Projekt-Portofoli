import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Navigation.css';
import img1 from '../assets/img1.jpg';

import {Link} from "react-router-dom";

function Home() {
  return (
    <>
    <section className="introduction" >
      <div className="container">
        <div className="row">
          <h1 className="text-center" style={{ paddingBottom: '2rem' , color:"white"}}>ABOUT ME</h1>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <p style={{ paddingTop: '2rem' ,color:"white"}}>
            Përshëndetje! Unë jam Denisa Hoxhalli, 21 vjeçe, e diplomuar në degën Informatikë Ekonomike 
            pranë Fakultetit të Ekonomisë, Universiteti i Tiranës. Ky website është krijuar për të prezantuar
             punën time, projektet që kam zhvilluar dhe pasionin tim për teknologjinë dhe zgjidhjet digjitale. 
             Interesat e mia përfshijnë zhvillimin e aplikacioneve, analizën e të dhënave dhe integrimin e teknologjisë 
             në fushën e ekonomisë. Qëllimi 
            im është të kontribuoj me zgjidhje efikase dhe inovative, duke kombinuar njohuritë teknike me ato ekonomike.
            </p>
            <a href="../contact.js">
              <button type="button" className="btn-sec">CONTACT ME</button>
            </a>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img src={img1} alt="img" className="image2" />
          </div>
        </div>
      </div>
    </section>
    
    <section >
     
    </section>

    </>
  );
}

export default Home;
