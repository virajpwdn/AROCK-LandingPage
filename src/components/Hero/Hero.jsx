import React from "react";
import MainText from "./MainText";
import SubText from "./SubText";

const Hero = () => {
  return (
    <div className="text-center w-screen absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] px-16 sm:px-28">
      <MainText />
      <SubText />
    </div>
  );
};

export default Hero;
