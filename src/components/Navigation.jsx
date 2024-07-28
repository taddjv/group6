import React, { useEffect } from "react";
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
            <a href="#accueil">Accueil</a>
          </div>
          <div className="links-line"></div>
          <div className="links-box">
            <div className="lb-box"></div>
            <a href="#a-propos">À propos</a>
          </div>
          <div className="links-line"></div>
          <div className="links-box">
            <div className="lb-box"></div>
            <a href="#mes-services">Mes services</a>
          </div>
          <div className="links-line"></div>
          <div className="links-box">
            <div className="lb-box"></div>
            <a href="#me-joindre">Me joindre</a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navigation;
