import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Portfolio from "./components/ProjectPages/PortfolioWebsite";
import Wiggles from "./components/ProjectPages/Wiggles";


function App() {
  return (
    <div className="wrapper">
      <NavBar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />

          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/weeklyWiggles" element={<Wiggles/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
