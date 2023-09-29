import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar__body">
      <a href="/">
        <img src="img/logo.webp" alt="Logo img" className="navbar__logo-img" />
      </a>
      <div className="navbar__navigation">
        <a
          href="https://app.joinr2d2.com/"
          target="_blank"
          className=" navbar__item navbar_signin"
        >
          Sign In
        </a>
        <a href="/join" className="navbar__item navbar_join">
          Join The Waitlist
        </a>
      </div>
    </div>
  );
};

export default Navbar;
