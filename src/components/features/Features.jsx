import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <div className="section_features">
    <div className="features__body">
      <div className="features__item">
        <img src="img/features1.gif" alt="" className="features__img-1" />
        <h1 className="features-h1">More Leads for Less</h1>
        <p>
          Finding new leads is hard (and expensive). Which is why we built R2D2
          from scratch with AI to help companies find more leads at a fraction
          of the cost.
        </p>
        <a href="" className="features_button">
          Find More Leads
        </a>
      </div>
      <div className="features__item">
        <img src="img/features2.gif" alt="" className="features__img-1" />
        <h1 className="features-h1">Lead Enrichment in Real Time</h1>
        <p>
          By leveraging the latest AI technology like AutoGPT, R2D2 helps
          companies uncover more ways to connect with future customers in
          real-time.
        </p>
        <a href="" className="features_button">
          Enrich Your Leads
        </a>
      </div>
      <div className="features__item">
        <img src="img/features3.gif" alt="" className="features__img-1" />
        <h1 className="features-h1">Personalized Outreach at Scale</h1>
        <p>
          R2D2 harnesses the power of several large language models (LLM’s) to
          write personal & professional emails at scale.
        </p>
        <a href="" className="features_button">
          Personalize My Outreach
        </a>
      </div>
    </div></div>
  );
};

export default Features;
