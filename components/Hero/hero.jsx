import React from "react";
import Image from 'next/image';

const Hero = () => {
  return (
    <div>
      <Image
        src="/images/bg.jpeg"
        alt="Your Image Alt Text"
        width={500}
        height={300}
      />
    </div>
  );
};

export default Hero;

