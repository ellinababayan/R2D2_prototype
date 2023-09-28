import React from "react";
import "./Book.css";

const Book = () => {
  return (
    <div className="book__body">
      <div className="book__container">
        <div className="book_section">
          {/* <img src="img/book-img.webp" alt="Book img" className="book__img" /> */}
          <img
            src="https://static.wixstatic.com/media/f12f60_e07adac43115416c90ec1f239876c67d~mv2.png/v1/fill/w_429,h_594,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f12f60_e07adac43115416c90ec1f239876c67d~mv2.png"
            alt="Book img"
            className="book__img"
          />
          <div className="book__text">
            <h1 className="book-h1">
              Transform Leads into Engaging Conversations
            </h1>

            <div className="book_item">
              <img
                src="img/checkmark.webp"
                alt="Checkmark"
                className="book-checkmark"
              />
              <p className="book__description">
                Personalized AI Outreach: Draft compelling messages <br></br> tailored for
                each lead.
              </p>
            </div>
            <div className="book_item">
              <img
                src="img/checkmark.webp"
                alt="Checkmark"
                className="book-checkmark"
              />
              <p className="book__description">
                Boosted Meeting Rates: Experience a surge in booked <br></br> meetings,
                effortlessly.
              </p>
            </div>
            <div className="book_item">
              <img
                src="img/checkmark.webp"
                alt="Checkmark"
                className="book-checkmark"
              />
              <p className="book__description">
                Packed Calendar: Prepare for back-to-back calls and an <br></br> energized
                sales cycle.
              </p>
            </div>
            <a href="" className="book__button">
              Unlock My Sales Superpowers
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
