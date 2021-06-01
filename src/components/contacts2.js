import axios from 'axios';
import React, { useState } from 'react'

import DjangoCSRFToken from 'django-react-csrftoken';
import { domain } from '../env';
axios.defaults.xsrfCookieName='csrftoken';
axios.defaults.xsrfHeaderName='X-CSRFToken';
const Contact = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const connection =async() => {
        console.log('bal');
        await axios({
                url: `${domain}/api/contacts/`,
                method: 'POST',
                
                data: {
                    'name':name,
                    'email': email,
                    'message': message,

                }
            }).then(response => {
                console.log('Messages====', response.data);
                
                    alert(response.data['response']);
                })
            }
    return (
        <div style={{
            
            paddingTop:"100px",
            paddingBottom:"100px",

            
        }} >
            <h2 className="text-white text-center  mb-5">Contact With Me</h2>
            <div className="container">

          
            <form  method="post" encType="text/plain" >
            {/* <form action="mailto:fahad.hstu16@gmail.com" method="post" encType="text/plain"> */}
            <DjangoCSRFToken/>
            <div class="row m-0" >
                <div class="col-lg-6 col-md-6 col-sm-12 text-white">
                    <div class="form-group text-left">
                        <label for="name">Name</label>
                        <input required="" type="text"  style={{background:"none"}} name="name" className="form-control  text-white" placeholder="Enter your name here"  onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div class="form-group text-left">
                        <label for="email">Email address</label>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} name="email"  style={{background:"none"}} placeholder="Enter your email here" className="form-control  text-white" id="email" />
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 text-white">
                    <div class="form-group text-left">
                        <label for="message">Message</label>
                        <textarea class="form-control text-white"  style={{background:"none"}} name="message" onChange={(e) => setMessage(e.target.value)} id="message" rows="5" placeholder="Put your message here"></textarea>
                    </div>
                </div>
            </div>
            
            <div class="row m-0">
                <div class="col-lg-12 col-md-12 col-sm-12">
                
                    <button type="button"    style={{ backgroundColor: "#0bbba0", border: "#0bbba0" }} className="btn-block btn text-white btn-lg mt-2" onClick={connection}>Submit</button>
                </div>
            </div>
            </form>
            </div>
        </div>
    );
};

export default Contact;