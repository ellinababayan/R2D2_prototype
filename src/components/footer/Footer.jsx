import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer__body">
      <div className="footer__container">
        <p className="footer_rights">
          &copy; 2023 Involve.ai. All rights reserved.
        </p>
        <div className="nav">
          <a href="/termsconditions" className="footer_terms">
            Terms
          </a>
          <a href="/privacy-policy" className="footer_policy">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
