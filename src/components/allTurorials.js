import React from 'react';

const allTurorials = () => {
    return (
        <div style={{
            background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url('1.jpg')",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundPosition: "top",
            paddingTop:"100px",
            paddingBottom:"100px",
            
        }}>
        <h2 className="text-white text-center"> My Tutorials</h2>
        <div className="container-fluid text-white">
            <div className="row">

            <div className="col-md-4"><iframe width="560" height="315" src="https://www.youtube.com/embed/60q6cvaLgWA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
            <div className="col-md-4"><iframe width="560" height="315" src="https://www.youtube.com/embed/60q6cvaLgWA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
            <div className="col-md-4"><iframe width="560" height="315" src="https://www.youtube.com/embed/60q6cvaLgWA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
            <div className="col-md-4"><iframe width="560" height="315" src="https://www.youtube.com/embed/60q6cvaLgWA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
            <div className="col-md-4"><iframe width="560" height="315" src="https://www.youtube.com/embed/60q6cvaLgWA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
            <div className="col-md-4"><iframe width="560" height="315" src="https://www.youtube.com/embed/60q6cvaLgWA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
            

           
                
            </div>
        </div>
        
    </div>
);
};

export default allTurorials;