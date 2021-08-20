import React, { Component } from 'react';
import axios from 'axios';
import { domain, domain1 } from '../env';
import { Link } from 'react-router-dom';
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
class Projectworks extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        axios({
            // url: `${domain}/api/projects/`,
            url: `${domain1}/api/projects/`,
            // url: "https://fahadsworld.herokuapp.com/api/projects/",
            method: 'GET'
        }).then(response => {
            this.setState({
                posts: response.data
            })
            console.log(domain);
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
                    <h4 className="pt-5 text-white m-0">Project Works</h4>
                    <div className="pt-2 text-white text-left " >
                        <ol className="row m-0">
                            {posts.slice(0, 4).map(post => <div key={post.id} className="col-md-6 col-sm-12 py-2 ">
                                <li>
                                    <h3><b>Name:</b> <a target="_blank" rel="noreferrer" href={post.urls}>{post.name}</a> </h3>

                                    <div className="text-justify"><b>Description:</b>
                                        <div dangerouslySetInnerHTML={{ __html: post.description }} />
                                    </div>
                                    <p className="text-justify"><b>Tools: </b>
                                        {post.tools}
                                    </p>
                                    <p className="text-justify"><b>Contribution: </b>
                                        {post.contribution}
                                    </p>
                                </li>
                            </div>)}
                        </ol>
                        <div className="text-center d-block mr-auto py-4">
                            <button style={{background:"green", text:"white"}} className="btn "><Link className="link"  to="/details/" > View More </Link></button>
                        </div>
                    </div>
                </div>

            );
        }
    }
}

export default Projectworks;