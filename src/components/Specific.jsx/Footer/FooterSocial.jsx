import React from "react";

const FooterSocial = (props) => {
  return (
    <div className={`${props.className}`}>
      <div className={`${props.className}`}>
        <h4 className="font-weight-light">Socials</h4>
        <ul className='footer-card-list'>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Youtube</li>
        </ul>
      </div>
    </div>
  );
};

export default FooterSocial;
