import React from 'react';
import {Link} from 'react-router-dom';
const tutorials = () => {
    return (
        <div style={{
            background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url('1.jpg')",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundPosition: "top",
            paddingBottom:"50px"
            
        }}>
            <div className="container-fluid text-white">
            <h2 className="text-white">My Tutorials</h2>
                <div className="row">

                <div className="col-md-4"><iframe width="560" height="315" src="https://www.youtube.com/embed/60q6cvaLgWA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                <div className="col-md-4"><iframe width="560" height="315" src="https://www.youtube.com/embed/60q6cvaLgWA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                <div className="col-md-4"><iframe width="560" height="315" src="https://www.youtube.com/embed/60q6cvaLgWA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                <div className="col-md-4"><iframe width="560" height="315" src="https://www.youtube.com/embed/60q6cvaLgWA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                <div className="col-md-4"><iframe width="560" height="315" src="https://www.youtube.com/embed/60q6cvaLgWA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                <div className="col-md-4"><iframe width="560" height="315" src="https://www.youtube.com/embed/60q6cvaLgWA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                

                <div className="text-center d-block ml-auto">
                <button className="btn  btn-outline-primary rounded "><Link className="link" to="/tutorials/" > Tutorials </Link></button>
                </div>
                    
                </div>
            </div>
            
        </div>
    );
};

export default tutorials;