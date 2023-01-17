import React from "react";

const FooterAbout = (props) => {
  return (
    <div className={`${props.className}`}>
      <h4 className="font-weight-light">About</h4>
      <p className="about-text">
        Bethel s mission is revival the personal, regional, and global expansion
        of Gods kingdom through His manifest presence.
      </p>
    </div>
  );
};

export default FooterAbout;
