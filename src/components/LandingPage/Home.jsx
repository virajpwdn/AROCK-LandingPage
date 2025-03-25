import React, { useRef } from "react";
import NavBar from "../Navbar/NavBar";
import Hero from "../Hero/Hero";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Home = () => {
  const bgRef = useRef();
  const tl = gsap.timeline();

  useGSAP(() => {
    gsap.to(bgRef.current, {
      opacity: 0,
      delay: 1,
      duration: 1.4,
    });
  });
  return (
    <>
      <div ref={bgRef} className="h-screen w-full fixed bg-[#111]"></div>
      <div className="h-screen w-screen">
        <NavBar />
        <Hero />
      </div>
    </>
  );
};

export default Home;
