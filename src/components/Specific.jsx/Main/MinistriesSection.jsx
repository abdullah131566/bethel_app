import React from "react";
import img1 from "../../../source/herobg.jpeg"
import img2 from "../../../source/herobg.jpeg"

const MinistriesSection = () => {
  return (
    <section className="section ministries-section theme-bg-dark">
            <h2 className="heading">MINISTRIES</h2>
        <div className="images-subsection relative">
            <div className="img absolute img1"></div>
            <div className="img absolute img2"></div>
        </div>
      <h2 className="quote relative">
        Unreached people groups <br /> hearing the Gospel message
      </h2>
      <a href="/ministries" className="btn-paddings theme-bg-dark to-light-bg border1-light smooth-transition no-outline pointer">
      
        Connect with a Ministry
      </a>
    </section>
  );
};

export default MinistriesSection;
