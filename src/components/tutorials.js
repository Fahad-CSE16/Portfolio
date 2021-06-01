import React from 'react';
import {Link} from 'react-router-dom';
const tutorials = () => {
    return (
        <div style={{
            
            paddingBottom:"50px"
            
        }}>
            <div className="container-fluid text-white">
            <h2 className="text-white">My Tutorials</h2>
                <div className="row">

                <div className="col-md-4 py-2 my-2"> 
                <iframe width="420" height="315" src="https://www.youtube.com/embed/oeGf1G5NNEM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="col-md-4 py-2 my-2"> 
                <iframe width="420" height="315" src="https://www.youtube.com/embed/videoseries?list=PL4NIq30KvXLApSre5PYCY6dy6TktUVtgW" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                
                <div className="col-md-4 py-2 my-2"> 
                <iframe width="420" height="315" src="https://www.youtube.com/embed/videoseries?list=PL4NIq30KvXLDES6CUeAWiSJNQzPsoBWI6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div><div className="col-md-4 py-2 my-2"> 
                <iframe width="420" height="315" src="https://www.youtube.com/embed/videoseries?list=PL4NIq30KvXLDf3a3DQXZyGv_BNYRYTXJS" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                
                
                </div>
                

                <div className="text-center d-block ml-auto">
                <button className="btn  btn-outline-primary rounded "><Link className="link" to="/tutorials/" > Tutorials </Link></button>
                </div>
                    
                </div>
            </div>
            
        </div>
    );
};

export default tutorials;