import React from "react";
import FooterAbout from "./Specific.jsx/Footer/FooterAbout";
import FooterMore from "./Specific.jsx/Footer/FooterMore";
import FooterResources from "./Specific.jsx/Footer/FooterResources";
import FooterSocial from "./Specific.jsx/Footer/FooterSocial";

const Footer = () => {
  return (
    <footer className="footer padding-inline40 theme-bg-dark">
      <div className="footer-div">
        <FooterAbout className="footer-card" />
        <FooterResources className="footer-card" />
        <FooterMore className="footer-card" />
        <FooterSocial className="footer-card" />
      </div>
      <h5 className="copyright-mark color-dim font-weight-light fit-content margin-auto">&#169;  Bethel.com. All Rights Reserved</h5>
    </footer>
  );
};

export default Footer;
