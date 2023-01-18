import React, { useRef } from "react";
import Link from "next/link";

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
          <Link href="/">Bethel</Link>
        </div>

        <ul
          className="nav-list theme-bg-dark flex flex-align-center flex-justify-center"
          ref={navListRef}
        >
          <li className="nav-item lazy-appear0">
            <Link href="/events">Events</Link>
          </li>
          <li className="nav-item lazy-appear1">
            <Link href="#">Founder&apos;s blog</Link>
          </li>
          <li className="nav-item lazy-appear2">
            <Link href="#">Volunteer & Donate</Link>
          </li>
          <li className="nav-item lazy-appear3">
            <Link href="#">Board of directors</Link>
          </li>
          <li className="nav-item lazy-appear4">
            <Link href="#">Contact Us</Link>
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
