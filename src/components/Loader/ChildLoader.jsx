import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const ChildLoader = () => {
  const lineRef = useRef();
  const tl = gsap.timeline();
  useGSAP(() => {
    tl.to(lineRef.current, {
      width: "100%",
      duration: 1.3,
      delay: 1,
      ease: "expo.out",
    }).to(lineRef.current, {
      opacity: 0,
    });
  });
  return (
    <div ref={lineRef} className="h-1 w-0 bg-white fixed rounded-md"></div>
  );
};

export default ChildLoader;
