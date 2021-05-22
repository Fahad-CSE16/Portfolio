import React from 'react';

const aboutme = () => {
    return (
        <div>

            <div className="container-fluid">
                <div className="row text-justify" style={{
                    background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),url('/1.jpg')",
                    backgroundSize: "cover",
                    backgroundAttachment: "fixed",
                    backgroundPosition: "top",
                    fontFamily: "Arial"
                }}>

                    <div className="col-md-6 text-white mt-5 p-5">
                        <h3> About Me</h3>
                        <p>
                            I am Mahmudul Hasan Moon. A self-reliant person. Studying in Computer Science and Engineering. I have a strong desire to work in various fields of Computer Science. In continuation, I am working on Machine learning, Data science and Computer security.</p> <p>

                            I like to do photography and cooking for self satisfaction. Sometimes I write poems, short stories for my own pleasure, and reciting poetry is one of my favorite activities. With a strong desire to teach, I am opening a channel on YouTube and uploading video lectures on various topics in Computer Science and Engineering, as well as writing regular blogs on contemporary issues and technology.</p> <p>

                            This is my website to present all my work to you. If you are interested in my work, you can visit my website and YouTube channel. I hope you like it.Thank you in advance. Stay by my side, keep praying. I want to serve everyone. I would like to give you some special gifts about computer science and engineering. God help everyone. All will be well. God bless you.</p>


                    </div>
                    <div className="col-md-4 mt-5 p-5">
                        <img src="/IM-1.jpg" alt="" className="d-block m-auto Img  img-thumbnail " />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default aboutme;