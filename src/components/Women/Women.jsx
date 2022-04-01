import React from "react";
import { Carousel } from "antd";
import "./Women.css";
import TextHeader from "../Header/TextHeader";
import ThirdSection from "../ThirdSection/ThirdSection";

const arrayVideos = [
  {
    video:
      "https://video.ralphlauren.com/202202/02222022-eu-w-lp-rlx/WLP_Hero_DSK.mp4?_ga=2.246970628.1637336962.1648631545-1775578303.1648631543",
  },
  {
    video:
      "https://video.ralphlauren.com//corporate_site/042221_BrandHero_WEB.mp4",
  },
];

const Women = () => {
  return (
    <div>
      <Carousel className="carousel-women" autoplay>
        {arrayVideos.map((item) => (
          <video
            autoPlay
            loop
            muted
            className="video-carousel"
            src={item.video}
          />
        ))}
      </Carousel>
      <TextHeader className="text-header" />
      <div className="women-shop container">
        <h1 className="women-shop__title">Women: Shop by Category</h1>
        <div className="women-shop__blocks">
          <div className="women-shop__block">
            <img
              src="https://www.ralphlauren.com/on/demandware.static/-/Sites-RalphLauren_US-Library/default/dwbb6238e8/img/202203/20220329-womens-lp/0329_wlp_m_c02a_img.jpg"
              alt=""
              className="women-shop__img"
            />
            <p>Dresses</p>
          </div>
          <div className="women-shop__block">
            <img
              src="https://www.ralphlauren.com/on/demandware.static/-/Sites-RalphLauren_US-Library/default/dw0facf9bc/img/202203/20220329-womens-lp/0329_wlp_m_c02e_img.jpg"
              alt=""
              className="women-shop__img"
            />
            <p>Footwear</p>
          </div>
          <div className="women-shop__block">
            <img
              src="https://www.ralphlauren.com/on/demandware.static/-/Sites-RalphLauren_US-Library/default/dwc64a0e2f/img/202203/20220329-womens-lp/0329_wlp_m_c02f_img.jpg"
              alt=""
              className="men-shop__img"
            />
            <p>Polo shirts</p>
          </div>
        </div>
      </div>
      <div className="women-shop-block2">
        <p className="women-shop-text1">Ralph Lauren</p>
        <p className="women-shop-text2">The resort Collection</p>
      </div>
      <ThirdSection />
    </div>
  );
};

export default Women;
