import React from "react";
import insta from "../assets/instagram.svg";
import tiktok from "../assets/tiktok.svg";
import facebook from "../assets/facebook.svg";
import linkedin from "../assets/linkedin.svg";
import youtube from "../assets/youtube.svg";
import logo from "../assets/1.png";
import "../style/banner.css";
import banner from "../assets/laywers.jpeg";

function Banner() {
  return (
    <section id="accueil" className="banner">
      <img className="bannerImage" src={banner} alt="Logo" />
      <img className="banner-image" src={logo} alt="" />
      <button className="RVButton">Prendre un Rendez-Vous</button>
      <a href="#a-propos" className="scroll">
        <div className="scroll-text">Allez en bas</div>
        <span className="scroll-logo">{">"}</span>
      </a>
      <div className="banner-side">
        <span className="bs-text">médias sociaux</span>
        <div className="bs-line"></div>
        <a className="social-logo" href="wwww.youtube.com">
          <img className="sl-icon" src={insta} alt="" />
        </a>{" "}
        <a className="social-logo" href="wwww.youtube.com">
          <img className="sl-icon" src={youtube} alt="" />
        </a>{" "}
        <a className="social-logo" href="wwww.youtube.com">
          <img className="sl-icon" src={facebook} alt="" />
        </a>{" "}
        <a className="social-logo" href="wwww.youtube.com">
          <img className="sl-icon" src={tiktok} alt="" />
        </a>{" "}
        <a className="social-logo" href="wwww.youtube.com">
          <img className="sl-icon" src={linkedin} alt="" />
        </a>
      </div>
    </section>
  );
}
export default Banner;
