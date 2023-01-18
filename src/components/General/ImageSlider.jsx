import React, { useEffect } from "react";
import { useState } from "react";

const ImageSlider = ({ children, time, transitionDuration }) => {
  const [index, setIndex] = useState(0);
  let currentTimeoutId = undefined;
  const incrementIndex = () => {
    clearTimeout(currentTimeoutId);
    setIndex((currentIndex) => (currentIndex + 1) % children.length);
    currentTimeoutId = setTimeout(incrementIndex, time);
  };
  useEffect(incrementIndex, []);
  return (
    <div className="image-slider">
      {children.map((img, imgIndex) => (
        <img
          src={img.props.src}
          key={img.props.src}
          alt={img.props.alt}
          className={imgIndex === index ? "image-appear" : "image-fade"}
          style={{ animationDuration: transitionDuration }}
        />
      ))}
    </div>
  );
};

export default ImageSlider;
