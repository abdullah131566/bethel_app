// import React from "react";
// import img from "../../../source/empoweringchurch_img.jpeg";

// const EmpoweringChurchSection = () => {
//     // const [showVideo, setShowVideo] = useState(false);
//   return (
//     <section className="section empoweringchurch-section theme-bg-dark">
//       <div className="empoweringchurch">
//         <h2>Empowering Church</h2>
//         <p className="font-weight-light">
//           Fostering the talents within the church to aid in the growth and
//           expansion of the Kingdom of Our Lord Jesus Christ
//         </p>
//         <a href="/church-works" className="btn-paddings theme-bg-light to-dark-bg border1-light smooth-transition no-outline pointer">
//           Learn More
//         </a>
//       </div>
//       <div className="image-container">
//         <img className="full-width" src={img.src} alt=""/>
//       </div>
//     </section>
    
    
//   );
// };

// export default EmpoweringChurchSection;

import React, { useState } from "react";
import img from "../../../source/empoweringchurch_img.jpeg";

const EmpoweringChurchSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      <section className="section empoweringchurch-section theme-bg-dark">
        <div className="empoweringchurch">
          <h2>Empowering Church</h2>
          <p className="font-weight-light">
            Fostering the talents within the church to aid in the growth and
            expansion of the Kingdom of Our Lord Jesus Christ
          </p>

          {/* <button
            className="btn-paddings theme-bg-light to-dark-bg border1-light smooth-transition no-outline pointer"
            onClick={() => setShowVideo(true)}
          > */}
          <button
            className="btn-paddings theme-bg-dark to-light-bg border1-light smooth-transition no-outline pointer square-btn"
            onClick={() => setShowVideo(true)}
          >

            Learn More
          </button>
        </div>

        <div className="image-container">
          <img className="full-width" src={img.src} alt="" />
        </div>
      </section>

      {/* VIDEO MODAL */}
      {showVideo && (
        <div className="video-overlay">
          <div className="video-modal">
            <button
              className="close-btn"
              onClick={() => setShowVideo(false)}
            >
              ✕
            </button>
            {/* <a href="/vision-statement" className="btn-paddings theme-bg-dark to-light-bg border1-dark smooth-transition no-outline pointer">
              Read More
            </a> */}

            <div className="video-placeholder">
              ▶
              <p>Video coming soon.....</p>
            </div>

            {/* <video controls width="100%">
              <source src="/videos/empowering-church.mp4" type="video/mp4" />
            </video> */}

          </div>
        </div>
      )}
    </>
  );
};

export default EmpoweringChurchSection;
