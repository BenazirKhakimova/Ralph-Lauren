import React from "react";
import "./Header.css";
import Container from "@mui/material/Container";
import NavBar from "../NavBar/NavBar";

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
      <div className="text-header">
        <div className="text-header-top">
          <p>POLO by Ralph Lauren</p>
        </div>
        <div className="text-header-bottom">
          <p>Morehouse College</p>
          <span>&</span>
          <p>Spelman College</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
