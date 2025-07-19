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
          <Link className="header-link" href="/">
            Bethel
          </Link>
        </div>

        <ul
          className="nav-list theme-bg-dark flex flex-align-center flex-justify-center"
          ref={navListRef}
        >
          <li className="nav-item lazy-appear0 hover-underline-animation">
            {/* <p>Missions & Evangelism</p> */}
            <Link className="header-link" href="#">
              Missions & Evangelism
            </Link>
            <div className="my-dropdown lazy-appear1">
              <div className="column">
                <h3 className="color-dim">Events</h3>
                <Link
                  className="hover-underline-animation header-link"
                  href="/local"
                >
                  Local
                </Link>
                <Link
                  className="hover-underline-animation header-link"
                  href="/global"
                >
                  Global
                </Link>
              </div>
            </div>
          </li>
          <li className="nav-item lazy-appear1 hover-underline-animation">
            <Link className="header-link" href="/church-planting">
              Church planting
            </Link>
          </li>
          <li className="nav-item lazy-appear2 hover-underline-animation">
            <Link className="header-link" href="/leadership-development">
              Leadership Development
            </Link>
          </li>
          <li className="nav-item lazy-appear3 hover-underline-animation">
            <Link className="header-link" href="/women-ministry">
              Women Ministry
            </Link>
          </li>
          <li className="nav-item lazy-appear4 hover-underline-animation">
            <Link className="header-link" href="/family-life">
              Family life
            </Link>
          </li>
          <li className="nav-item lazy-appear5 hover-underline-animation">
            <Link className="header-link" href="/contact">
              Compassion & Relief
            </Link>
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
