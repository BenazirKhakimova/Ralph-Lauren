import React from "react";
import { Carousel } from "antd";
import "./CarouselSection.css";

const arrayPhotos = [
  {
    image:
      "https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/z0verp0b16dk7ld6d9hg/rl?fimg-ssr-default",
  },
  {
    image:
      "https://graziamagazine.com/us/wp-content/uploads/sites/15/2022/03/ralph-lauren-hbcu-3.png?resize=1024%2C819",
  },
  {
    image:
      "https://www.washingtonpost.com/resizer/Tj2sVmxyjhtfXR6iT0gLhudzSz4=/arc-anglerfish-washpost-prod-washpost/public/HPWAMX5N25EXTCLPZ36DVNUCG4.jpg",
  },
];

const CarouselSection = () => {
  return (
    <div className="carousel-block">
      <h1 className="carousel-title">Seasonal Stories</h1>
      <Carousel className="carousel" autoplay>
        {arrayPhotos.map((item) => (
          <img className="img-carousel" src={item.image} />
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselSection;
