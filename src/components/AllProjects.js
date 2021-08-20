import React, { Component } from 'react';
import axios from 'axios';

import { domain, domain1 } from '../env';
import { withRouter } from 'react-router-dom';
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

class AllProjects extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        axios({
            url: `${domain}/api/projects/`,
            // url: `${domain1}/api/projects/`,
            // url: "https://fahadsworld.herokuapp.com/api/projects/",
            method: 'GET'
        }).then(response => {
            this.setState({
                posts: response.data
            })
            console.log(domain1);
            console.log("from mount", this.state.posts);
        })
    }
    render() {
        let { posts } = this.state
        if (posts.length === 0) {
            return <h1 style={{ textAlign: 'center', }}>Loading.....</h1>

        }
        else {
            return (
                <div id="project" style={{ paddingTop: "50px" }}>
                    <h1 className="pt-5 text-white text-center m-0">Project Works</h1>
                    <div className="pt-2 text-white text-left " >
                        <ol className="row m-0">
                            {posts.map(post => <div key={post.id} className="col-md-8 offset-md-2 py-2 ">
                                <li>
                                    <h3><b>Name:</b> <a target="_blank" rel="noreferrer" href={post.urls}>{post.name}</a> </h3>
                                    <p className="text-justify"><b>Description:</b>
                                    {post.description} 
                                    </p>
                                </li>
                            </div>)}
                        </ol>
                    </div>
                </div>

            );
        }
    }
}

export default withRouter(AllProjects);