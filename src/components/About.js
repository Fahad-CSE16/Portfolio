import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <div className="container-fluid mt-5 " style={{
                background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url('1.jpg')",
                backgroundSize: "cover",
                backgroundAttachment: "fixed",
                backgroundPosition: "top",
                fontFamily: "Algerian"
            }}>
                <div className="row text-left " >
                    <div className="col-md-4 pt-5">
                        <img src="IM-1.jpg" alt="" className="d-block m-auto Img rounded-circle img-thumbnail " />
                    </div>
                    <div className="col text-white">
                        <button className="bt btn-primary"> Hello I'm </button>
                        <h1 className="text-white">Md Fahad Hossain</h1>
                        <h3> Web Developer</h3>
                        <p style={{ fontFamily: "Arial" }}><i className="fa fa-envelope"></i> mdfahadhossain71@gmail.com</p>
                        <p style={{ fontFamily: "Bauhaus 93" }}><i className="fa fa-phone"></i> 01701036134</p>
                        <p style={{ fontFamily: "Bauhaus 93" }}><i className="fa fa-phone"></i> 01521255246</p>
                        <p style={{ fontFamily: "Arial" }}><i className="fa fa-map-marker-alt"></i> 220, Bhangnahati, Sreepur, Gazipur</p>
                        <a target="_blank" href="https://www.facebook.com/staywithmoon"><i class="fab fa-facebook m-2"></i></a>
                        <a target="_blank" href="https://www.facebook.com/staywithmoon"><i class="fab fa-instagram m-2"></i></a>
                        <a target="_blank" href="https://www.facebook.com/staywithmoon"><i class="fab fa-linkedin m-2"></i></a>
                        <a target="_blank" href="https://www.facebook.com/staywithmoon"><i class="fab fa-github m-2"></i></a>

                    </div>
                </div>
                <div className="text-center d-block m-auto">
                <button className="btn  btn-outline-primary rounded "> <Link to="/aboutme/" > More About Me </Link>  </button>
                </div>
            </div>
        </div>
    );
};

export default About;