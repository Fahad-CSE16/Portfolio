import React, { Component } from 'react';
import axios from 'axios';

import { domain, domain1 } from '../env';
import { withRouter } from 'react-router-dom';
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

class AllProjects extends Component {
    constructor(props) {
        super(props)
        this.connection();
        this.state = {
            name: "",
            email: "",
            message: "",
            projects: [],
        }
    }
    connection = async () => {

        await axios({
            url: `${domain}/api/projects/`,
            // url: `${domain1}/api/projects/`,
            // url: "https://fahadsworld.herokuapp.com/api/projects/",
            method: 'GET'
        }).then(response => {
            this.state.projects = response.data;
            console.log(domain1);
            console.log(this.state.projects);
        })
    }
    render() {

        return (
            <div id="project" style={{

                paddingTop: "50px"

            }}>
                <h1 className="pt-5 text-white text-center m-0">Project Works</h1>
                <div className="pt-2 text-white text-left " >
                    <ol className="row m-0">
                        <div className="col-md-8 offset-md-2 py-2 ">
                            <li>
                                <h3><b>Name:</b> <a target="_blank" rel="noreferrer" href="https://desirebd.herokuapp.com/">Desirebd</a> </h3>
                                <p className="text-justify"><b>Description:</b> <span className="text-success"> <b> Tuitionbd:</b></span> {this.state.projects}
                                </p>
                                    
                                <p><b>Tools:</b>Python with Django, HTML5, CSS, Bootstrap4.</p>
                            </li>
                        </div>
                       
                        

                    </ol>
                </div>
            </div>
        );
    }
}

export default withRouter(AllProjects);