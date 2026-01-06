import React from "react";
// import "../styles/give.css";

const Give = () => {
  return (
    <>
      {/* ================= GIVE HERO SECTION ================= */}
{/* ================= GIVE HERO SECTION ================= */}
<section className="give-hero-section">
  <div className="give-hero-inner">
    
    {/* LEFT CONTENT */}
    <div className="give-hero-content">
      <h1 className="give-hero-title">
        Generosity Is an <br/>Act of Worship
      </h1>

      <p className="give-hero-text">
        Giving is more than a transaction – it is an expression of faith,
        gratitude, and obedience to God. At Bethel, we believe generosity flows from a heart surrendered
        to Christ, recognizing that everything we have comes from Him.
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <div className="give-hero-image"></div>

  </div>
</section>

{/* ================= GIVE SCRIPTURE SECTION ================= */}
<section className="give-scripture-section">
  <div className="give-scripture-inner">
    <p className="give-scripture-text">
      &ldquo;Each of you should give what you have decided
      <br />
       in your heart to give... For God loves a 
      <br />
       cheerful giver.&rdquo;
    </p>

    <span className="give-scripture-reference">
      2 Corinthians 9:7
    </span>
  </div>
</section>

{/* ================= PARTNER WITH BETHEL SECTION ================= */}
<section className="partner-section">
  <div className="partner-inner">

    {/* LEFT CONTENT */}
    <div className="partner-content">
        <span className="partner-line"></span>
      

      <div className="partner-text-wrapper">
        <h2 className="partner-title">Partner With Bethel</h2>
        

        <p className="partner-text">
        If you have arrived on this page, it means you carry a desire to support the work God is doing through Bethel.
        Our ministry continues through prayer, partnership, and the faithful support of those who believe in the mission God has entrusted to us - serving the Church, empowering leaders, and reaching communities with compassion and hope.
        At this time, we do not receive donations through online transactions. Instead, we value personal connection, prayerful partnership, and meaningful conversation.
        </p>
      </div>
    </div>

    {/* RIGHT DESIGN IMAGE */}
    <div className="partner-image"></div>

  </div>
</section>
{/* ================= SECTION DIVIDER ================= */}
<div className="give-section-divider"></div>

{/* ================= HOW CAN YOU HELP SECTION ================= */}
<section className="give-help-section">
  <div className="give-help-inner">

    {/* LEFT CONTENT */}
    <div className="give-help-content">

      <h2 className="give-help-title">
        HOW CAN YOU HELP ? 
        {/* <span className="help-question">?</span> */}
      </h2>

      <p className="give-help-intro">
        If you would like to support Bethel or explore ways to partner with us,
        we would love to hear from you. Please reach out to us and let us know:
      </p>

      <div className="give-help-list-wrapper">
        <span className="give-help-line"></span>

        <ul className="give-help-list">
          <li>HOW YOU WOULD LIKE TO SUPPORT THE MINISTRY</li>
          <li>WHAT GOD HAS PLACED ON YOUR HEART</li>
          <li>HOW WE CAN CONNECT AND PRAY TOGETHER</li>
        </ul>
      </div>

      <p className="give-help-note">
        EVERY ACT OF GENEROSITY - WHETHER THROUGH GIVING, PRAYER, OR SERVICE - 
        IS DEEPLY APPRECIATED.
        {/* Every act of generosity - whether through giving, prayer, or service -
        is deeply appreciated. */}
      </p>

    </div>

    {/* RIGHT DESIGN IMAGE */}
    <div className="give-help-image"></div>

  </div>
</section>

{/* ================= SECTION DIVIDER ================= */}
<div className="give-section-divider"></div>

{/* ================= GET IN TOUCH SECTION ================= */}
<section className="give-contact-section">
  <div className="give-contact-inner">

    {/* LEFT IMAGE */}
    <div className="give-contact-image"></div>

    {/* RIGHT CONTENT */}
    <div className="give-contact-content">
      <h2 className="give-contact-title">
        <span className="get-text">GET IN</span>{" "}
        <span className="touch-text">TOUCH</span>
      </h2>

      <p className="give-contact-text">
        TO SUPPORT BETHEL OR LEARN MORE ABOUT PARTNERING WITH OUR MINISTRY,
        PLEASE CONTACT TO US DIRECTLY
      </p>
    </div>

  </div>
</section>



    </>
  );
};

export default Give;


