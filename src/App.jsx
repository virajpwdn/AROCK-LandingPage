import React from "react";
import Home from "./components/LandingPage/Home";
import ParentLoader from "./components/Loader/ParentLoader";
import Menu from "./components/Menu/Menu";

const App = () => {
  return (
    <div className="bg-[#111] h-screen relative w-screen">
      <ParentLoader />
      <Home />
      <Menu/>
    </div>
  );
};

export default App;
