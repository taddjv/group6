import React from "react";
import "../style/banner.css";
import banner from "../assets/peopleBackground.jpeg";
import DownArrow from "../assets/downArrow.png";

function Banner() {
  return (
    <section className="banner">
      <img className="bannerImage" src={banner} alt="Logo" />
      <button className="RVButton">Prendre un Rendez-Vous</button>
      <a href="#a-propos" className="scroll">
        <div className="scroll-text">Allez en bas</div>

        <img className="scroll-logo" src={DownArrow} />
      </a>
    </section>
  );
}
export default Banner;
