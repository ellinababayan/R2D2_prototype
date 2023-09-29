import React from "react";
import "./Join.css";
import Footer from "../../components/footer/Footer";

const Join = () => {
  const handleSubmit = () => {
    console.log("Success!");
    const thankYouMessage = document.createElement("p");
    thankYouMessage.textContent = "Thanks! We will be in touch with you soon";

    const formContainer = document.getElementById("form-container");
    formContainer.appendChild(thankYouMessage);
  };
  return (
    <div className="join__body">
      <div className="join__container">
        <img src="img/logo.webp" alt="" className="logo__join" />
        <h1 className="join-h1">Your next 100,000 customers are waiting...</h1>
        <h4 className="join-h4">Sign Up for Early Access</h4>
        <form onSubmit={handleSubmit} className="join_form">
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
            />
          </div>
          <div>
            <label htmlFor="email">Email*</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <label htmlFor="companyName">Company</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              placeholder="Company Name"
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <input
              type="text"
              id="message"
              name="message"
              placeholder="Your message here (optional)..."
            ></input>
          </div>
          <div id="form-container">{/* Submission message goes here */}</div>

          <div>
            <button type="submit" className="button_submit">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="join-footer__body">
        <div className="join-footer__container">
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
    </div>
  );
};

export default Join;
