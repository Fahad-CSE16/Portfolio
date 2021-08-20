import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Route, BrowserRouter as Router } from '../node_modules/react-router-dom';

import reportWebVitals from './reportWebVitals';
import Aboutme from './components/aboutme';
import Navbar from './components/navbar';
import Contact from './components/contact';
import Footer from './components/footer';
import AllTurorials from './components/allTurorials';
import AllProjects from './components/AllProjects';

const routing =(
  <Router>

  <div>
    <Navbar/>
  <Route exact path="/" component={App} />
  <Route  path="/aboutme/" component={Aboutme}/>
  <Route path="/contact/" component={Contact}/>
  <Route path="/tutorials/" component={AllTurorials}/>
  <Route path="/details/" component={AllProjects}/>
  <Footer/>
  </div>
  </Router>

)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
