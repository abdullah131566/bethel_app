import React from "react";
import Image from "next/image";
import img from "../../../source/visionstatement-themepic.jpeg";

const VisionStatementSection = () => {
  return (
    <section className="section vision-statement-section">
      <div className="vision-statement">
        <h2>Vision Statement</h2>
        <p className="font-weight-light">
          Bethel Evangelistic Organization exists to make Christ known through
          missions and evangelism, and to reach the unreached with the Gospel
          message. To help Christian marriage and families become spiritually
          strong through clear Biblical teaching and counseling.
        </p>
        <button className="btn-paddings theme-bg-dark to-light-bg border1-dark smooth-transition no-outline pointer">
          Read More
        </button>
      </div>
      <div className="image-container">
        <img className="full-width" src={img.src} alt="" />
      </div>
    </section>
  );
};

export default VisionStatementSection;
