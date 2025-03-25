import React, { useRef } from "react";
import NavBar from "../Navbar/NavBar";
import Hero from "../Hero/Hero";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Home = () => {
  const bgRef = useRef();
  const heroRef = useRef();
  const tl = gsap.timeline();

  useGSAP(() => {
    gsap.to(bgRef.current, {
      y: "-100%",
      //   opacity: 0,
      delay: 2,
      duration: 1,
    });

    gsap.from(heroRef.current, {
      scale: 1.05,
      delay: 2.1,
      duration: 1,
    });
  });
  return (
    <>
      <div ref={bgRef} className="h-screen w-full fixed bg-[#111] z-10"></div>
      <div
        ref={heroRef}
        className="h-screen w-screen bg-[url(https://images.prismic.io/arock-website-2023/d4147892-cb03-4582-af32-326bb109803f_AROCK-_1502.jpg?fm=webp&q=100&fit=crop)] bg-cover w-full bg-center"
      >
        <NavBar />
        <Hero />
      </div>
    </>
  );
};

export default Home;
