import React from "react";

const WhatWeDoSection = () => {
  return (
    <section className="section whatwedo-section">
      <div className="img"></div>
      <sub className="relative">
        <h5 className="about relative">ABOUT</h5>
        <h2 className="heading">What we do?</h2>
        <p className="">
          Our ultimate goal is to see lives transformed by the power of the
          Gospel, and for our community and the world to be changed for the
          better as a result.
        </p>
        <div className="btn-group">
          <button className="btn-paddings theme-bg-dark to-light-bg border1-dark smooth-transition no-outline pointer">
            Camps
            <span className="arrow">&#8594;</span>
          </button>
          <button className="btn-paddings theme-bg-light to-dark-bg border1-dark smooth-transition no-outline pointer">
            Relief
            <span className="arrow">&#8594;</span>
          </button>
          <button className="btn-paddings theme-bg-light to-dark-bg border1-dark smooth-transition no-outline pointer">
            Persecution
            <span className="arrow">&#8594;</span>
          </button>
          <br />
          <button className="btn-paddings theme-bg-light to-dark-bg border1-dark smooth-transition no-outline pointer">
            Food Distribution
            <span className="arrow">&#8594;</span>
          </button>
          <button className="btn-paddings theme-bg-light to-dark-bg border1-dark smooth-transition no-outline pointer">
            Evangelism
            <span className="arrow">&#8594;</span>
          </button>
        </div>
      </sub>
    </section>
  );
};

export default WhatWeDoSection;