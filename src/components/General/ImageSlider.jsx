import React, { useEffect, useRef, useState} from "react";
// import { useState } from "react";

const ImageSlider = ({ children, time, transitionDuration }) => {
  const [index, setIndex] = useState(0);
  // let currentTimeoutId = undefined;
  // ✅ FIX: useRef instead of normal variable
  const timeoutRef = useRef(null);

  const incrementIndex = () => {
    // clearTimeout(currentTimeoutId);
    // Clear previous timeout safely
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // setIndex((currentIndex) => (currentIndex + 1) % children.length);
    // currentTimeoutId = setTimeout(incrementIndex, time);
    
    setIndex((currentIndex) => (currentIndex + 1) % children.length);

    // Set new timeout
    timeoutRef.current = setTimeout(incrementIndex, time);
  };
  // useEffect(incrementIndex, []);
    useEffect(() => {
    incrementIndex();

    // ✅ Cleanup on unmount
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);
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
