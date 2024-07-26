import React, { useEffect } from "react";
import "../style/nosServices.css";
import insurance from "../assets/insurance.jpg";
import savings from "../assets/savings.jpg";
import investing from "../assets/investing.jpg";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function NosServices() {
  return (
    <section className="nos-services">
      {/* <div className="ns-service"> */}
      <div className="ns-service">
        <div className="nss-left">
          <div className="ap-title">Assurance</div>
          <div className="nsl-desc">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            repudiandae similique unde deserunt nihil recusandae ipsum,
            consequatur porro pariatur placeat autem temporibus doloremque at.
            Dicta odio incidunt cupiditate nesciunt quae?
          </div>
        </div>
        <div className="nss-right">
          <img src={insurance} className="nss-right-img" />
        </div>
        {/* </div> */}
        {/* <div className="ns-service"> */}
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
        {/* </div> */}
        {/* <div className="ns-service"> */}
        <div className="nss-left">
          <div className="ap-title">Placements</div>
          <div className="nsl-desc">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            repudiandae similique unde deserunt nihil recusandae ipsum,
            consequatur porro pariatur placeat autem temporibus doloremque at.
            Dicta odio incidunt cupiditate nesciunt quae?
          </div>
        </div>
        <div className="nss-right">
          <img src={investing} className="nss-right-img" />
        </div>
      </div>
      {/* <div className="nss-left">
          <div className="nsl-title">Assurance</div>
          <div className="nsl-desc">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            repudiandae similique unde deserunt nihil recusandae ipsum,
            consequatur porro pariatur placeat autem temporibus doloremque at.
            Dicta odio incidunt cupiditate nesciunt quae?
          </div>
        </div>
        <div className="nss-right">
          <img src={insurance} className="nss-right-img" />
        </div>
      </div>
      <div className="ns-service">
        <div className="nss-left">
          <div className="nsl-title">Épargne</div>
          <div className="nsl-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            repudiandae similique unde deserunt nihil recusandae ipsum,
            consequatur porro pariatur placeat autem temporibus doloremque at.
            Dicta odio incidunt cupiditate nesciunt quae?
          </div>
        </div>
        <img src={savings} className="nss-right" />
      </div>
      <div className="ns-service">
        <div className="nss-left">
          <div className="nsl-title">Placements</div>
          <div className="nsl-desc">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            repudiandae similique unde deserunt nihil recusandae ipsum,
            consequatur porro pariatur placeat autem temporibus doloremque at.
            Dicta odio incidunt cupiditate nesciunt quae?
          </div>
        </div> 
        <img src={investing} className="nss-right" />
        </div>
  */}
    </section>
  );
}

export default NosServices;
