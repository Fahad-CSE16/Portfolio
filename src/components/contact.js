import React from 'react';

const contact = () => {
    return (
        <div style={{
            background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url('/1.jpg')",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundPosition: "top",
            paddingTop:"100px",
            paddingBottom:"100px",

            
        }} >
            <h2 className="text-white text-center  mb-5">Contact With Me</h2>
            <div className="container">

          
            <form  method="post" encType="text/plain">
            {/* <form action="mailto:fahad.hstu16@gmail.com" method="post" encType="text/plain"> */}
            <div class="row m-0" >
                <div class="col-lg-6 col-md-6 col-sm-12 text-white">
                    <div class="form-group text-left">
                        <label for="name">Name</label>
                        <input required="" type="text"  style={{background:"none"}} name="name" className="form-control  text-white" placeholder="Enter your name here" />
                    </div>
                    <div class="form-group text-left">
                        <label for="email">Email address</label>
                        <input type="email" name="mail"  style={{background:"none"}} placeholder="Enter your email here" className="form-control  text-white" id="email" />
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 text-white">
                    <div class="form-group text-left">
                        <label for="message">Message</label>
                        <textarea class="form-control text-white"  style={{background:"none"}} name="comment" id="message" rows="5" placeholder="Put your message here"></textarea>
                    </div>
                </div>
            </div>
            
            <div class="row m-0" style={{
                    background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url('/1.jpg')",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed",
                    backgroundPosition: "top"
                }}>
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <button type="Submit" name="Submit" value="send" style={{ backgroundColor: "#0bbba0", border: "#0bbba0" }} className="btn-block btn text-white btn-lg mt-2">Submit</button>
                </div>
            </div>
            </form>
            </div>
        </div>
    );
};

export default contact;