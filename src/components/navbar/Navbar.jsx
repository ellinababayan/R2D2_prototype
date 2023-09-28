import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar__body">
      <img src="img/logo.webp" alt="Logo img" className="navbar__logo-img" />

      <div className="navbar__navigation">
        <a href="" className=" navbar__item navbar_signin">
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
