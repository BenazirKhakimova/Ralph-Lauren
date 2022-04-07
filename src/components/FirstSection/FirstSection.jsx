import React from "react";
import "./FirstSection.css";

const FirstSection = () => {
  return (
    <div className="firstSection">
      <p className="firstSection-text">
        "Our portrait of American style, and our vision of the American dream,
        would be incomplete without Black experiences like this."
      </p>
      <h1 className="firstSection-title">Ralph Lauren</h1>
      <div className="firstSection-block">
        <div className="firstSection-img">
          <img
            src="https://assets.vogue.com/photos/622f5282562415ab5a00d3ec/master/w_1600%2Cc_limit/J000003_5047_02.jpg"
            alt=""
          />
          <h3>Morehouse College</h3>
          <a className="shopNow" href="">
            Shop now
          </a>
        </div>
        <div className="firstSection-img">
          <img
            src="http://cdn.cnn.com/cnnnext/dam/assets/220316083812-03-ralph-lauren-hbcu.jpg"
            alt=""
          />
          <h3>Spellman College</h3>
          <a className="shopNow" href="">
            Shop now
          </a>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
