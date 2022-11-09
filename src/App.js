import "./styles.css";
import React from "react";
import NavBar from "./components/NavBar.js";
import Hero from "./components/Hero.js";
import BrandBanner from "./components/BrandBanner";
import Brand from "./images/Bridgestone.png"
import Automations from "./components/Automations";
import Footer from "./components/Footer";
// import IdeaCard from "./components/IdeaCard";
// import LogIn from "./components/LogIn";


const App = () => {
  return (
    <div className="App">
      <NavBar />
      <BrandBanner brand={Brand} />
      <Hero />
      <Automations/>
      <Footer/>
      
      {/* <LogIn/> */}
    </div>
  );
};

export default App;
