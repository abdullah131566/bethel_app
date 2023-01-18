import React from "react";
import Image from "next/image";
import img from "../../../source/ouroffice_img.jpeg";

const OurOfficeSection = () => {
  return (
    <section className="section ouroffice-section theme-bg-light">
      <div className="ouroffice">
        <p className="font-weight-light">
          Office # 21, Asim Plaza, Chandni Chowk, Murree Rd, Rawalpindi
        </p>
        <p className="font-weight-light">
          Our location at Office # 21, Asim Plaza, Chandni Chowk, Murree Rd,
          Rawalpindi serves as a platform for us to fulfill our mission of
          bringing the kingdom and will of God to Earth.
        </p>
        <button className="btn-paddings theme-bg-dark to-light-bg border1-dark smooth-transition no-outline pointer">
          Learn More
        </button>
      </div>
      <div className="image-container">
        <img className="full-width" src={img.src} alt="" />
      </div>
    </section>
  );
};

export default OurOfficeSection;
