import React from "react";

const FooterResources = (props) => {
  return (
    <div className={`${props.className}`}>
      <h4 className="font-weight-light">Resources</h4>
      <ul className='footer-card-list'>
        <li>Compassion</li>
        <li>Church Ministry</li>
        <li>Discipleship</li>
        <li>Conferences</li>
        <li>Seminars</li>
      </ul>
    </div>
  );
};

export default FooterResources;
