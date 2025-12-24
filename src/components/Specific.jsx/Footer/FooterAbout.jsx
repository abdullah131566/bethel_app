import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";



import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const FooterAbout = (props) => {
  const formRef = useRef();
  const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_k4jx0tm",     // 🔴 replace
      "template_qkih2ek",    // 🔴 replace
      formRef.current,
      "ZUI9mwI10_JBs4WRI"      // 🔴 replace
    )
    .then(
      () => {
        // alert("Message sent successfully!");
        toast.success("Message sent successfully!")
        formRef.current.reset();
      },
      (error) => {
        console.error("EmailJS Error:", error);
        // alert("Something went wrong. Please try again.");
        toast.error("Failed to send message. Please try again.");
      }
    );
};


  return (
    // <div className={`${props.className}`}>
    //   <h4 className="font-weight-light">About</h4>
    //   <p className="about-text">
    //     Bethel s mission is revival the personal, regional, and global expansion
    //     of Gods kingdom through His manifest presence.
    //   </p>
    // </div>
    <footer className="footer">
      <div className="footer-inner">
        {/* TOP - left text + links, right contact form card */}
        <div className="footer-top">
          <div className="footer-left">


            <p className="footer-intro">
              Bethel&apos;s mission is revival the personal, regional, and global expansion of Gods 
              kingdom through His manifest presence.
            </p>

            {/* <div className="footer-links-col">
              <div className="footer-column"> */}
                {/* <h4 className="footer-column-title">Product</h4> */}
                {/* <ul>
                  <li><a href="#product" className="footer-link"><b> Product</b></a></li>
                  <li><a href="#how-it-works" className="footer-link">How It Works</a></li>
                  <li><a href="#why-us" className="footer-link">Why Us</a></li>
                </ul>
              </div>
            </div> */}
            <div className="relative">
              <h1 className="heading">Resources </h1>
              <div className="btn-group">
              <div className="btn-paddings theme-bg-light to-dark-bg border1-dark smooth-transition no-outline pointer">
                Seminars
                {/* <span className="arrow">&#8594;</span> */}
              </div>
              <div className="btn-paddings theme-bg-light to-dark-bg border1-dark smooth-transition no-outline pointer">
                Discipline
                
              </div>
              <div className="btn-paddings theme-bg-light to-dark-bg border1-dark smooth-transition no-outline pointer">
                Compassion
                {/* <span className="arrow">&#8594;</span> */}
              </div>
              {/* <br /> */}
              <div className="btn-paddings theme-bg-light to-dark-bg border1-dark smooth-transition no-outline pointer">
                Conferences
                {/* <span className="arrow">&#8594;</span> */}
              </div>
              < div className="btn-paddings theme-bg-light to-dark-bg border1-dark smooth-transition no-outline pointer">
                Church Ministry
                
              </div>
            </div>
            {/* Socials */}
            <div className="footer-socials">
              <h2 className="socials-heading">Socials</h2>

              <div className="socials-icons">
                <a href="#" className="social-box" aria-label="Facebook">
                  <FaFacebookF />
                </a>

                <a href="#" className="social-box" aria-label="Twitter">
                  <FaTwitter />
                </a>

                <a href="#" className="social-box" aria-label="YouTube">
                  <FaYoutube />
                </a>
              </div>
            </div>

            
            </div>

            
          </div>

          <div className="footer-right">
            <div className="contact-card" role="form" aria-labelledby="contact-title">
              <h3 id="contact-title" className="contact-title">Send a Message</h3>
              <p className="contact-sub">
                Fill out the form below with your query in the description <br/>box and we&apos;ll get back to you.
              </p>

              {/* <form   className="contact-form" > */}
              <form
                ref={formRef}
                onSubmit={sendEmail}
                className="contact-form"
              >

                <label className="visually-hidden" htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  name="from_name"
                  className="input"
                  type="text"
                  // name="name" // ✅ must match EmailJS template variable
                  placeholder="Your name"
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                  required
                />

                <label className="visually-hidden" htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  name="from_email"
                  className="input"
                  type="email"
                  // name="email" // ✅ must match EmailJS template variable
                  placeholder="Your email"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <label className="visually-hidden" htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="textarea"
                  // name="message" // ✅ must match EmailJS template variable
                  placeholder="Your message"
                  // value={message}
                  // onChange={(e) => setMessage(e.target.value)}
                  rows={6}
                  required
                />

                <button type="submit" className="send-btn"  aria-label="Send message">
                  Send message

                </button>
              </form>
            </div>
          </div>
          
        </div>
        <h5 className="copyright-mark color-dim font-weight-light fit-content margin-auto">&#169;  bethelpk.org. All Rights Reserved</h5>
        </div>
        </footer>
  );
};

export default FooterAbout;
