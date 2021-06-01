import React from 'react';
import { Link } from 'react-router-dom';
const navbar = () => {
    return (
        
            <div className="navbar menu navbar-dark bg-none mb-5 navbar-expand-md fixed-top"  style={{
                background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url('/media/bg.jpg')",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                backgroundPosition: "top",
                color: "white"
            }}>
            <div class="container">
            <h1 className="text-center text-white" style={{
            fontFamily: "Blackadder ITC"
        }} > <a className="text-center text-white" href="/"> StudyWithFahad</a></h1>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto font-weight-bold">
                        <li><a href="/" class="nav-link">Home</a></li>
                        <li class="nav-item"> <Link className="link nav-link" to="/aboutme/" > About </Link></li>
                        <li class="nav-item">
                            <a href="/#Services" class="nav-link">Services</a>
                        </li>
                        <li class="nav-item">
                            <a href="/#educations" class="nav-link">Educations</a>
                        </li>
                        <li class="nav-item">
                            <a href="/#project" class="nav-link">Projects</a>
                        </li>
                        <li class="nav-item"> <Link className="link  nav-link" to="/tutorials/" > Tutorials </Link></li>
                        <li class="nav-item">
                            <a href="/#skills" class="nav-link">Skills</a>
                        </li>
                        <li class="nav-item"> <Link className="link nav-link" to="/contact/" > Contact </Link></li>
                    </ul>
                </div>
            </div>
        </div>
       
    );
};

export default navbar;