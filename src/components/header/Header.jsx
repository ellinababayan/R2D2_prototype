import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header__body">
      <video
        className="bg-video"
        src="img/bg_video.mp4"
        autoPlay
        loop
        muted
      ></video>
      <div className="header_content">
        <h1 className="header-h1">
          Let AutoGPT Find <br></br>Your Next <br></br> 100,000 Customers
        </h1>
        <h3 className="header-h3">
          R2D2 automates the entire business development process using AI. <br></br> It
          can find qualified leads, enrich leads with market intelligence, send
          personalized outreach and grow your pipeline by 10x.
        </h3>
        <a href="" className="header-button">
          Get Early Access!
        </a>
      </div>
    </div>
  );
};

export default Header;
