import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Portfolio from "./components/ProjectPages/PortfolioWebsite";
import Wiggles from "./components/ProjectPages/Wiggles";
import PWBM from "./components/ProjectPages/PWBM";
import Campus from "./components/ProjectPages/CampusPaths";
import Moonlight from "./components/ProjectPages/Moonlight";
import Tempo from "./components/ProjectPages/Tempo";
import Phoenix from "./components/ProjectPages/Phoenix";
import GBE  from "./components/ProjectPages/GBE";
//import  from "./components/ProjectPages/";



function App() {
  return (
    <div className="wrapper">
      <NavBar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />

          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/weeklywiggles" element={<Wiggles/>} />
          <Route path="/pwbm" element={<PWBM/>} />
          <Route path="/campuspaths" element={<Campus/>} />
          <Route path="/moonlight" element={<Moonlight/>} />
          <Route path="/tempo" element={<Tempo/>} />
          <Route path="/phoenix" element={<Phoenix/>} />
          <Route path="/growingbeyondearth" element={<GBE/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
