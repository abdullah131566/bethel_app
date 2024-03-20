import React, { useState, useEffect } from 'react';

import img1 from "@/source/backgrounds/bg1.jpeg";
import img2 from "@/source/backgrounds/bg2.jpeg";
import img3 from "@/source/backgrounds/bg3.jpeg";
import img4 from "@/source/backgrounds/bg4.jpeg";
import img5 from "@/source/backgrounds/bg5.jpeg";
import img6 from "@/source/backgrounds/bg6.jpeg";
import img7 from "@/source/backgrounds/bg7.jpeg";

const images = [
  img1.src, img2.src, img3.src, img4.src, img5.src, img6.src, img7.src
];

const preloadImages = (imageUrls) => {
  imageUrls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
};

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    preloadImages(images);

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="section hero-section color-text flex flex-align-center font-weight-light"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100vh',
        transition: 'background-image 2s ease-in-out' // Move transition property here
      }}
    >
      <div className="content-container">
        <h1 className="verse">
          <q>
            HE MUST INCREASE; <br />
            AND I MUST DECREASE.
          </q>
        </h1>
        <h5 className="reference">-- JOHN 3:31</h5>
      </div>
    </section>
  );
};

export default HeroSection;
