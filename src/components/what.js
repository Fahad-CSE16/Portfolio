import React from 'react';

const what = () => {
    return (
        <div className="bg-dark text-white" id="Services">
            <h2 className="text-primary pt-5">Services</h2>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 ">
                        <div className="card pt-0">
                            <img className="cardFooter" alt="fahad" src="/media/python.png" width="50px" />
                            <img className="cardFooter ml-2" alt="fahad" src="/media/laravel.png" width="50px" />
                            <h3 className="cardTitle">Backend Developer</h3>
                            <p className="cardDesc">I am a professional Django Developer. I have experience in building website's backend using python framework DJango. I have completeted several Projects using django.</p>
                        </div></div>
                    <div className="col-md-4 ">
                        <div className="card pt-0">
                            <img className="cardFooter" alt="fahad" src="/media/react2.png" width="50px" />
                            <img className="cardFooter" alt="fahad" src="/media/vue.png" width="50px" />
                            {/* <img className="cardFooter" alt="fahad" src="/media/html.png" width="50px" />
                            <img className="cardFooter p-1" alt="fahad" src="/media/css.png" width="50px" />
                            <img className="cardFooter p-1" alt="fahad" src="/media/js.png" width="50px" /> */}
                            <h3 className="cardTitle">Frontend Developer</h3>
                            <p className="cardDesc">I am a professional React Developer. I have experience in building website's frontend using javascript library React and framework Vue.js. I have completeted several Projects using react or Vue.</p>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="card">
                            <img className="cardFooter" alt="fahad" src="/media/fullstack1.png" width="50px" />
                            <h3 className="cardTitle">FullStack Developer</h3>
                            <p className="cardDesc">I am a professional Fullstack Developer. I have experience in building complete website using Django, REST API, ReactJS, VueJS, MySQL, PostgreSQL,DOCKER, Git and Github.</p>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="card">
                            <img className="cardFooter" alt="fahad" src="/media/youtube.png" width="50px" />
                            <h3 className="cardTitle">Youtuber</h3>
                            <p className="cardDesc">I am a Professional Youtuber. I have made several video lectures and published on youtube about several topics of technology.</p>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="card">
                            <img className="cardFooter" alt="fahad" src="/media/frelancer.png" width="50px" />
                            <h3 className="cardTitle pt-0">Freelancer</h3>
                            <p className="cardDesc">I am a Professional Freelancer. I have  several gig of several topic in online marketplace like Fivrr. You can contact with me through fivrr for any type of Orders.</p>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="card">
                            <img className="cardFooter" alt="fahad" src="/media/database.png" width="50px" />
                            <h3 className="cardTitle">Database</h3>
                            <p className="cardDesc">I am a Database administrator. I do solve for several database related problems.Feel free to contact with me anytime</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default what;