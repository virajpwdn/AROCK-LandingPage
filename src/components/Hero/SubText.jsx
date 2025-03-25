import React from "react";
import "remixicon/fonts/remixicon.css";

const SubText = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="section-1 flex gap-2 items-center">
        <div className="left text-4xl">
          <i className="ri-play-circle-line"></i>
        </div>
        <div className="right text-sm leading-none font-semibold">
          <p>
            Play <br /> The Flim{" "}
          </p>
        </div>
      </div>
      <div className="section2 flex gap-10">
        <div className="left">
          <h2 className="uppercase font-semibold text-sm leading-none">
            Content <br /> creator
          </h2>
        </div>
        <div className="right">
          <h2 className="uppercase font-semibold text-sm leading-none">
            New York <br /> los angeles
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SubText;
