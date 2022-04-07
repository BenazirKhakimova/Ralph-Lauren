import React from "react";
import "./MoreSection.css";

const MoreSection = () => {
  return (
    <div className="moreSection container">
      <h1 className="moreSection-title">More to Explore</h1>
      <div className="moreSection-blocks">
        <div className="moreSection-block">
          <img
            src="https://www.ralphlauren.com/on/demandware.static/-/Sites-RalphLauren_US-Library/en_US/v1648729221320/img/202203/20220329-homepage-top/0329_hp_c07_img.jpg"
            alt=""
            className="moreSection-img"
          />
          <p className="moreSection-text">Collection</p>
          <a href="#" className="moreSection-link">
            expore more
          </a>
        </div>
        <div className="moreSection-block">
          <img
            src="https://www.ralphlauren.com/on/demandware.static/-/Sites-RalphLauren_US-Library/en_US/v1648729221320/img/202203/20220329-homepage-top/0329_hp_c08_img.jpg"
            alt=""
            className="moreSection-img"
          />
          <p className="moreSection-text">Fall/Winter 2022</p>
          <a href="#" className="moreSection-link">
            expore more
          </a>
        </div>
        <div className="moreSection-block">
          <img
            src="https://www.ralphlauren.com/on/demandware.static/-/Sites-RalphLauren_US-Library/default/dw6c9f6986/img/202203/20220329-homepage-top/0329_hp_c09_img.jpg"
            alt=""
            className="moreSection-img"
          />
          <p className="moreSection-text">Purple Label</p>
          <a href="#" className="moreSection-link">
            expore more
          </a>
        </div>
      </div>
    </div>
  );
};

export default MoreSection;
