import React from "react";
import Home from "./components/LandingPage/Home";
import ParentLoader from "./components/Loader/ParentLoader";

const App = () => {
  return (
    <div className="bg-[#111]">
      <ParentLoader />
      <Home />
    </div>
  );
};

export default App;
