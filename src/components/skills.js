import React from 'react';

const skills = () => {
    return (
        <div  style={{
            background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url('1.jpg')",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundPosition: "top",
            paddingBottom:"50px"
            
        }}>
            <div className="container pt-3">

            <h2 className="text-white">The Skills I Have:</h2>
            <div className="row">
                <div className="col-md-3"> <img src="react2.png" alt="react" className="d-block m-auto Img rounded-circle img-thumbnail  " /> </div>
                <div className="col-md-3"> <img src="python.png" alt="react" className="d-block m-auto Img rounded-circle img-thumbnail  " /> </div>
                <div className="col-md-3"> <img src="django.png" alt="react" className="d-block m-auto Img rounded-circle img-thumbnail  " /> </div>
                <div className="col-md-3 bg-none"> <img src="rest.png" alt="react" className="d-block m-auto Img rounded-circle img-thumbnail  " /> </div>
                <div className="col-md-3 bg-none"> <img src="rest.png" alt="react" className="d-block m-auto Img rounded-circle img-thumbnail  " /> </div>
                <div className="col-md-3 bg-none"> <img src="java.png" alt="react" className="d-block m-auto Img rounded-circle img-thumbnail  " /> </div>
                <div className="col-md-3 bg-none"> <img src="js.png" alt="react" className="d-block m-auto Img rounded-circle img-thumbnail  " /> </div>
                <div className="col-md-3 bg-none"> <img src="bootstrap.png" alt="react" className="d-block m-auto Img rounded-circle img-thumbnail  " /> </div>
                <div className="col-md-3 bg-none"> <img src="vue.png" alt="react" className="d-block m-auto Img rounded-circle img-thumbnail  " /> </div>
                <div className="col-md-3 bg-none"> <img src="css.png" alt="react" className="d-block m-auto Img rounded-circle img-thumbnail  " /> </div>
                <div className="col-md-3 bg-none"> <img src="html.png" alt="react" className="d-block m-auto Img rounded-circle img-thumbnail  " /> </div>
                <div className="col-md-3 bg-none"> <img src="laravel.png" alt="react" className="d-block m-auto Img rounded-circle img-thumbnail  " /> </div>
            </div>

            </div>
        </div>
    );
};

export default skills;