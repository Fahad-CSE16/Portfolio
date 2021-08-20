import "./App.css";
import About from './components/About'
import What from './components/what'
import Skills from './components/skills'
import PSKills from './components/programmingSkills'
import Education from './components/education'
import Projects from './components/project'
import AllProjects from './components/AllProjects'

import Tutorial from './components/tutorials'

function App() {
  return (
    <div className="App" style={{
      paddingBottom:"50px"
      
  }}>
      
      <About />
      <What />
      <Projects />
      <PSKills />
      <Skills />
      <Education />
      <Tutorial/>
      <AllProjects/>
      

    

    </div>
  );
}

export default App;
