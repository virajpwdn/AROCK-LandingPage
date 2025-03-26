import React from "react";
import Tilt from 'react-parallax-tilt';



const MenuLeft = () => {
  return (
    <div className="w-2/3 p-2 relative">
      <Tilt
        tiltMaxAngleX={5}  // Smooth but noticeable tilt
        tiltMaxAngleY={5}
        transitionSpeed={1000}  // Slower transition for smoothness
        perspective={800}  // Adds realistic depth
        glareEnable={true}  // Optional: Gives a light reflection effect
        glareMaxOpacity={0.2} // Subtle glare
        scale={1.02}  // Slight zoom effect on tilt
        className="w-full h-full relative flex items-center justify-center"
      >
        <img
          src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop"
          className="absolute top-0 scale-[0.80] opacity-20 right-0 h-full w-full object-cover"
          alt=""
        />
        <img
          src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop"
          className="absolute top-0 scale-[0.84] opacity-40 right-0 h-full w-full object-cover"
          alt=""
        />
        <img
          src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop"
          className="absolute top-0 scale-[0.88] opacity-60 right-0 h-full w-full object-cover"
          alt=""
        />
        <img
          src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop"
          className="absolute top-0 scale-[0.92] opacity-80 right-0 h-full w-full object-cover"
          alt=""
        />
        <img
          src="https://images.prismic.io/arock-website-2023/9ef06a29-91de-4fb2-bb2a-2d208f8fcc2a_AROCK-_1497.jpg?fm=webp&q=100&fit=crop"
          className="absolute top-0 scale-[0.96] opacity-60 right-0 h-full w-full object-cover"
          alt=""
        />
      </Tilt>
    </div>
  );
};


export default MenuLeft;
