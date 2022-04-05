import React from "react";
import { Carousel } from "antd";
import "./Men.css";
import TextHeader from "../Header/TextHeader";
import ThirdSection from "../ThirdSection/ThirdSection";
import Recommended from "../Recommended/Recommended";
import { Link } from "react-router-dom";

const arrayVideos = [
  {
    video:
      "https://video.ralphlauren.com/202203/20220329-mens-lp/RALPH%20LAUREN%20MENs%20CH2%20LOOP%2001%20V01%20-%20LOCKED_1440x528_MASTER.mp4?_ga=2.242971522.1637336962.1648631545-1775578303.1648631543",
  },
  {
    video:
      "https://video.ralphlauren.com/202203/20220315-mens-lp/SITE_Polo_Mens_Wellness_Club_Loop_06_DSK_1440_x_528_V1_H264.mp4?_ga=2.242971522.1637336962.1648631545-1775578303.1648631543",
  },
  {
    video:
      "https://video.ralphlauren.com/202203/20220329-mens-lp/RALPH%20LAUREN%20MENs%20CH2%20LOOP%2001%20V01%20-%20LOCKED_1440x528_MASTER.mp4?_ga=2.242971522.1637336962.1648631545-1775578303.1648631543",
  },
];

const Men = () => {
  return (
    <div>
      <Carousel className="carousel-men" autoplay>
        {arrayVideos.map((item) => (
          <video
            autoPlay
            loop
            muted
            className="video-carousel"
            src={item.video}
            key={item.id}
          />
        ))}
      </Carousel>
      <TextHeader className="text-header" />
      <div className="men-shop container">
        <h1 className="men-shop__title">Men: Shop by Category</h1>
        <div className="men-shop__blocks">
          <Link to="/men/sweaters">
            <div className="men-shop__block">
              <img
                src="https://www.ralphlauren.com/on/demandware.static/-/Sites-RalphLauren_US-Library/en_US/v1648808154513/img/202203/20220329-mens-lp-top/0329_mlp_m_c02b_img.jpg"
                alt=""
                className="men-shop__img"
              />
              <p>sweaters</p>
            </div>
          </Link>
          <Link to="/men/footwear">
            <div className="men-shop__block">
              <img
                src="https://www.ralphlauren.com/on/demandware.static/-/Sites-RalphLauren_US-Library/en_US/v1648808154513/img/202203/20220329-mens-lp-top/0329_mlp_m_c02c_img.jpg"
                alt=""
                className="men-shop__img"
              />
              <p>Footwear</p>
            </div>
          </Link>
          <Link to="/polo">
            <div className="men-shop__block">
              <img
                src="https://www.ralphlauren.com/on/demandware.static/-/Sites-RalphLauren_US-Library/en_US/v1648808154513/img/202203/20220329-mens-lp-top/0329_mlp_m_c02d_img.jpg"
                alt=""
                className="men-shop__img"
              />
              <p>Polo shirts</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="men-shop-block2">
        <p className="men-shop-text1">Ralph Lauren</p>
        <p className="men-shop-text2">The resort Collection</p>
      </div>
      <ThirdSection />
      {/* <Recommended /> */}
    </div>
  );
};

export default Men;
