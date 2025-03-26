import React from "react";
import "remixicon/fonts/remixicon.css";

const SubText = () => {
  return (
    <div className="flex items-center justify-between font-[u4] w-full">
      <div className="section-1 flex gap-2 items-center text-left">
        <div className="left text-xl sm:text-4xl">
          <i className="ri-play-circle-line"></i>
        </div>
        <div className="right font-[a4] text-[0.8rem] leading-none font-semibold text-left">
          <p>
            Play <br /> The Flim{" "}
          </p>
        </div>
      </div>
      <div className="section2 flex gap-5 text-[0.6rem] sm:gap-20">
        <div className="left">
          <h2 className="uppercase font-semibold leading-none text-left">
            Content <br /> Curator
          </h2>
        </div>
        <div className="right">
          <h2 className="uppercase font-semibold leading-none text-left">
            New York <br /> los angeles
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SubText;
