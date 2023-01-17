import React from "react";
import img from "../../../source/empoweringchurch_img.jpeg";

const EmpoweringChurchSection = () => {
  return (
    <section className="section empoweringchurch-section theme-bg-dark">
      <div className="empoweringchurch">
        <h2>Empowering Church</h2>
        <p className="font-weight-light">
          Fostering the talents within the church to aid in the growth and
          expansion of the Kingdom of Our Lord Jesus Christ
        </p>
        <button className="btn-paddings theme-bg-light to-dark-bg border1-light smooth-transition no-outline pointer">
          Learn More
        </button>
      </div>
      <div className="image-container">
        <img className="full-width" src={img.src} alt="" />
      </div>
    </section>
  );
};

export default EmpoweringChurchSection;
