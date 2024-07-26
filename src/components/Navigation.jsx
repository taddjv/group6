import React, { useEffect } from "react";
import logo from "../assets/greenLogoo.png";
import "../style/navigation.css";
import {
  motion,
  useViewportScroll,
  useTransform,
  useScroll,
} from "framer-motion";

function Navigation() {
  return (
    <>
      <header>
        <div className="links">
          <div className="links-box">
            <div className="lb-box"></div>
            <a href="#a-propos">À propos</a>
          </div>
          {/* <a href="#a-propos">À propos</a> */}
          <div className="links-line"></div>
          <div className="links-box">
            <div className="lb-box"></div>
            <a href="#nos-services">Mes services</a>
          </div>
          <div className="links-line"></div>
          <div className="links-box">
            <div className="lb-box"></div>
            <a href="/">Blog</a>
          </div>
          <div className="links-line"></div>
          <div className="links-box">
            <div className="lb-box"></div>
            <a href="/">Me joindre</a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navigation;
