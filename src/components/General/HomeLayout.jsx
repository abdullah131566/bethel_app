import React from "react";

const HomeLayout = ({ children }) => {
  const [header, main, footer] = children;
  return (
    <div className="home-layout">
      <div className="header-container">{header}</div>
      <div className="main-container">{main}</div>
      <div className="footer-container">{footer}</div>
    </div>
  );
};

export default HomeLayout;
