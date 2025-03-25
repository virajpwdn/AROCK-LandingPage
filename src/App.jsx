import React from "react";
import Home from "./components/LandingPage/Home";
import ParentLoader from "./components/Loader/ParentLoader";

const App = () => {
  return (
    <div
      className="bg-[#111] bg-cover w-full bg-center"
      style={{
        backgroundImage:
          "url('https://images.prismic.io/arock-website-2023/d4147892-cb03-4582-af32-326bb109803f_AROCK-_1502.jpg?fm=webp&q=100&fit=crop')",
      }}
    >
      <ParentLoader />
      <Home />
    </div>
  );
};

export default App;
