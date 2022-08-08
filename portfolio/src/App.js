import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Portfolio from "./components/ProjectPages/PortfolioWebsite";
import Wiggles from "./components/ProjectPages/Wiggles";
import PWBM from "./components/ProjectPages/PWBM";
import Campus from "./components/ProjectPages/CampusPaths";
import Moonlight from "./components/ProjectPages/Moonlight";



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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
