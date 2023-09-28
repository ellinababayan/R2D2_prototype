import React from "react";
import "./Features.css";

const Features = () => {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);
  return (
    <div className="section_features">
      <div className="features__body">
        <div className="features__item">
          <img
            src="img/features1.gif"
            alt=""
            className="features__img features__img-1 reveal fade-left"
          />
          <div className="features_description">
            <h1 className="features-h1">
              More Leads <br></br> for Less
            </h1>
            <p className="features-p">
              Finding new leads is hard (and expensive). Which is why we built
              R2D2 from scratch with AI to help companies find more leads at a
              fraction of the cost.
            </p>
            <a href="/join" className="features_button">
              Find More Leads
            </a>
          </div>
        </div>
        <div className="features__item-2">
          <div className="features_description features_description-2">
            <h1 className="features-h1">
              Lead Enrichment <br></br> in Real Time
            </h1>
            <p className="features-p">
              By leveraging the latest AI technology like AutoGPT, R2D2 helps
              companies uncover more ways to connect with future customers in
              real-time.
            </p>
            <a href="/join" className="features_button">
              Enrich Your Leads
            </a>
          </div>
          <img
            src="img/features2.gif"
            alt=""
            className="features__img features__img-1 reveal fade-right"
          />
        </div>
        <div className="features__item">
          <img
            src="img/features3.gif"
            alt=""
            className="features__img features__img-1 reveal fade-left"
          />
          <div className="features_description">
            <h1 className="features-h1">
              Personalized <br></br> Outreach at Scale
            </h1>
            <p className="features-p">
              R2D2 harnesses the power of several large language models (LLM’s)
              to write personal & professional emails at scale.
            </p>
            <a href="join" className="features_button">
              Personalize My Outreach
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
