import React, { useRef } from "react";

const Header = () => {
  const navListRef = useRef(null);
  const hamburgerClickHandler = (e) => {
    if ("active" in navListRef.current.classList)
      navListRef.current.classList.remove("active");
    else navListRef.current.classList.add("active");
  };
  return (
    <header className="header relative padding-inline40 theme-bg-dark full-widthnheight flex flex-align-center flex-justify-sb">
      <nav className="flex">
        <div className="logo">
          <a href="/">Bethel</a>
        </div>

        <ul
          className="nav-list theme-bg-dark flex flex-align-center flex-justify-center"
          ref={navListRef}
        >
          <li className="nav-item lazy-appear0">
            <a href="/events">Events</a>
          </li>
          <li className="nav-item lazy-appear1">
            <a href="#">Founder's blog</a>
          </li>
          <li className="nav-item lazy-appear2">
            <a href="#">Volunteer & Donate</a>
          </li>
          <li className="nav-item lazy-appear3">
            <a href="#">Board of directors</a>
          </li>
          <li className="nav-item lazy-appear4">
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
      <div
        className="hamburger flex-column flex-justify-sb pointer"
        onClick={hamburgerClickHandler}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <button className="header-search-btn transparent-bg no-border no-outline color-text smooth-transition pointer"></button>
    </header>
  );
};

export default Header;
