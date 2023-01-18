import React, { useRef } from "react";
import Link from "next/link";

const Header = () => {
  const navListRef = useRef(null);
  const hamburgerRef = useRef(null);
  const hamburgerClickHandler = (e) => {
    if (navListRef.current.classList.contains("active")) {
      navListRef.current.classList.remove("active");
      navListRef.current.classList.remove("scale-down");
      hamburgerRef.current.classList.remove("to-cross");
    } else {
      navListRef.current.classList.add("active");
      navListRef.current.classList.add("scale-down");
      hamburgerRef.current.classList.add("to-cross");
    }
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
            <Link href="/blogs">Founder&apos;s blog</Link>
          </li>
          <li className="nav-item lazy-appear2">
            <Link href="/donate">Volunteer & Donate</Link>
          </li>
          <li className="nav-item lazy-appear3">
            <Link href="/directors-board">Board of directors</Link>
          </li>
          <li className="nav-item lazy-appear4">
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
      <div
        className="hamburger flex-column flex-justify-sb pointer"
        ref={hamburgerRef}
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
