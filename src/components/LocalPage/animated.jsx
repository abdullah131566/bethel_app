import React from 'react';

function AnimatedText() {
  return (
    <div className="animated-wrapper">
      <div className="animated-container flex flex-column">
        <p className='animated-heading'>We Help</p>
        <section className="animation">
          <div className="first text-white"><div>Authentic People</div></div>
          <div className="second text-white"><div>Passionate Humans</div></div>
          <div className="third text-white"><div>Creative Thinkers</div></div>
          <div className="fourth text-white"><div>Strategic Go-Getters</div></div>
          <div className="fifth text-white"><div>Smart Marketers</div></div>
        </section>
      </div>
    </div>
  );
}

export default AnimatedText;
