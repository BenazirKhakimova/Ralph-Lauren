import React from "react";
import Header from "../Header/Header";
import FirstSection from "../FirstSection/FirstSection";
import ThirdSection from "../ThirdSection/ThirdSection";
import MoreSection from "../MoreSection/MoreSection";
import CarouselSection from "../CarouselSection/CarouselSection";
import FormOfPayment from "../FormOfPayment/FormOfPayment";
const Homepage = () => {
  return (
    <div>
      <Header />
      <FirstSection />
      <ThirdSection />
      <CarouselSection />
      <MoreSection />
    </div>
  );
};

export default Homepage;
