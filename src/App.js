import "./App.css";
import About from './components/About'
import What from './components/what'
import AboutMe from './components/aboutme'
import Skills from './components/skills'
import PSKills from './components/programmingSkills'
import Education from './components/education'
import Projects from './components/project'

import Tutorial from './components/tutorials'
import {Route, Link, BrowserRouter as Router } from '../node_modules/react-router-dom';

function App() {
  return (
    <div className="App">
      
      <About />
      <What />
      <Skills />
      <PSKills />
      <Projects />
      <Education />
      <Tutorial/>
      

    

    </div>
  );
}

export default App;
