import React from 'react';
import { Link } from 'react-router-dom';


const footer = () => {
    return (
        <div>
            <div style={{backgroundColor: "black"}} class=" pt-5 ">
            <div class="container pt-5">
                <div class="row overflow-hidden text-white py-4">
                    <div class="col-lg-4 col-md-6 col-sm-12 text-center col-12 mb-4">
                        <h1 className="text-center" style={{
            fontFamily: "Blackadder ITC"
        }} >StudyWithFahad</h1>
                        <div class=" mt-3">
                            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/fahad.cse16">
                                <i class="fab mr-2 fa-facebook text-white"></i>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/md_fahad_hossain/" class="text-white">
                                <i class="fab mr-2  fa-instagram"></i></a>
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/fahad-cse16/"> <i class="fab mr-2 fa-linkedin text-white"></i></a>
                            <a target="_blank" rel="noreferrer" href="https://github.com/Fahad-CSE16" class="text-white"><i class="fab mr-2 fa-github"></i></a>
                            
                            

                        </div>
                        <ul class="list-group text-center contact-list-group mt-3" style={{listStyle: "none"}}>
                            <li><a class="text-white" href="mailto:mdfahadhossain71@gmail.com"><i class="fa fa-envelope"></i> &nbsp;
                                    mdfahadhossain71@gmail.com</a></li>
                            <li><i class="fa fa-phone"></i>&nbsp; 01701036134</li>
                            <li><a target="_blank" rel="noreferrer" href="https://www.google.com/maps?ll=25.698686,88.649244&amp;z=16&amp;t=m&amp;hl=en-US&amp;gl=US&amp;mapclient=embed" class="text-white"><i class="fa fa-map-marker-alt"></i> &nbsp;
                                    HSTU,Dinajpur,Bangladesh</a></li>
                        </ul>
                    </div>

                    <div class="col-lg-4 text-center col-md-6 col-sm-12 col-12 mb-4">
                        <h2 class="mb-3 at-a-galance overflow-hidden" style={{
            // fontFamily: "Bauhaus93",
            // fontFamily: "Blackadder ITC",
          
            fontFamily: "Freestyle Script",
            // fontFamily: "Brush Script MT",
        }}>At a Glance</h2>
                        <p><a class="text-white" href="/">Home</a></p>
                        <p><a href="/#Services" class="text-white">My Secrvices</a></p>
                        <p> <Link className="link text-white" to="/contact/" > Contact Me</Link></p>
                    </div>
                    <div class="col-lg-4 text-center col-md-12 col-sm-12 col-12 text-center col-6 mb-4">
                        <h3 class="mb-4 text-center developed-by overflow-hidden " style={{
            // fontFamily: "Bauhaus93",
            // fontFamily: "Blackadder ITC",
            fontFamily: "Magneto",
            // fontFamily: "Magneto",
            // fontFamily: "Freestyle Script",
            // fontFamily: "Brush Script MT",
        }}>Developed By</h3>

                        <h5 class="mb-0 pb-0 developer">Md Fahad Hossain</h5> <br/>
                        <span> <i class="fa fa-envelope"></i> &nbsp;
                            mdfahadhossain71@gmail.com</span>
                        <div class="mt-2">
                        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/fahad.cse16">
                                <i class="fab mr-2 fa-facebook text-white"></i>
                            </a>
                            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/md_fahad_hossain/" class="text-white">
                                <i class="fab mr-2  fa-instagram"></i></a>
                            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/fahad-cse16/"> <i class="fab mr-2 fa-linkedin text-white"></i></a>
                            <a target="_blank" rel="noreferrer" href="https://github.com/Fahad-CSE16" class="text-white"><i class="fab mr-2 fa-github"></i></a>


                        </div>


                        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/developerkamrul" class="mt-3 btn d-block my-3 btn-success  w-100">Contact with the developer</a>
                    </div>
                </div>
            </div>
            <div class="row bg-dark py-2">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <h5 class="text-white text-center font-weight-light">Copyright © Md Fahad Hossain</h5>

                </div>
            </div>
    </div>
        </div>
    );
};

export default footer;