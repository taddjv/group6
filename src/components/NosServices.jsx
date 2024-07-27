import React from "react";
import "../style/nosServices.css";
import assurance from "../assets/insurance.svg";
import epargne from "../assets/saving.svg";
import investissement from "../assets/investing.svg";
import insurance from "../assets/insurance.jpg";
import savings from "../assets/savings.jpg";
import investing from "../assets/investing.jpg";
import books from "../assets/books.jpg";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function NosServices() {
  return (
    <section id="mes-services" className="nos-services">
      <img className="bannerImage" src={books} alt="" />
      <div className="ns-title">Nos Services</div>
      <div className="all-services">
        <div className="service">
          <img className="s-logo" src={assurance} alt="" />
          <div className="s-title">Assurance</div>
        </div>
        <div className="service">
          <img className="s-logo" src={epargne} alt="" />
          <div className="s-title">Epargne</div>
        </div>
        <div className="service">
          <img className="s-logo" src={investissement} alt="" />
          <div className="s-title">Investissement</div>
        </div>
      </div>
    </section>
  );
}

export default NosServices;

{
  /* <div className="ns-service">
<div className="nss-left">
  <div className="ap-title">Assurance</div>
  <div className="nsl-desc">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
    repudiandae similique unde deserunt nihil recusandae ipsum,
    consequatur porro pariatur placeat autem temporibus doloremque at.
    Dicta odio incidunt cupiditate nesciunt quae?
  </div>
</div>
<div className="nss-right">
  <img src={insurance} className="nss-right-img" />
</div>
<div className="nss-right">
  <img src={savings} className="nss-right-img" />
</div>
<div className="nss-left">
  <div className="ap-title">Épargne</div>
  <div className="nsl-desc">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
    repudiandae similique unde deserunt nihil recusandae ipsum,
    consequatur porro pariatur placeat autem temporibus doloremque at.
    Dicta odio incidunt cupiditate nesciunt quae?
  </div>
</div>
<div className="nss-left">
  <div className="ap-title">Placements</div>
  <div className="nsl-desc">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
    repudiandae similique unde deserunt nihil recusandae ipsum,
    consequatur porro pariatur placeat autem temporibus doloremque at.
    Dicta odio incidunt cupiditate nesciunt quae?
  </div>
</div>
<div className="nss-right">
  <img src={investing} className="nss-right-img" />
</div>
</div> */
}
