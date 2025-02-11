"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/palace/mmcsecoxamxqd8azk4cv",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/palace/magdtxpz8sejtyewp1pv",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/palace/b7vytc3ahpcokqpeljun",
  "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/palace/o8dxwssjr1zfp7nnikiu",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 3000ms

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="relative w-full h-[50vh] lg:h-[80vh] mt-16 lg:mt-0 ">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Hero;
