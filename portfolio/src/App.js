
import "./App.css";

import NavBar from './components/NavBar';
import Banner from './components/Banner';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Education />
      <Projects />

      
    </div>
  );
}

export default App;
