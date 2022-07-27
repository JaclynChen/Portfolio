import logo from "./logo.svg";
import "./App.css";

import NavBar from './components/NavBar';
import Banner from './components/Banner';
import About from './components/About';
import Education from './components/Education';
import Resume from './components/Resume';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Education />
      <Resume />
      <Projects />
    </div>
  );
}

export default App;
