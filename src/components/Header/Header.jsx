import React from "react";
import "./Header.css";
import NavBar from "../NavBar/NavBar";
import TextHeader from "./TextHeader";

const Header = () => {
  return (
    <div className="header">
      <video
        className="header-video"
        autoPlay
        loop
        muted
        src="https://video.ralphlauren.com/202203/20220329-homepage/03292022_hbcu_hp_1440x720.mp4?_ga=2.150672694.1637336962.1648631545-1775578303.1648631543"
      ></video>
      <NavBar />
      <TextHeader />
    </div>
  );
};

export default Header;
