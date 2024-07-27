import React, { useEffect } from "react";
import "../style/aPropos.css";
import growth from "../assets/growth.png";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import room from "../assets/room.jpg";

function Apropos() {
  const squareVariants = {
    visible: { opacity: 1, transition: { duration: 2, delay: 0.25 } },
    hidden: { opacity: 0 },
  };
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <>
      <section id="a-propos" className="banner">
        <img className="bannerImage" src={room} alt="Logo" />
        <div className="aPropos">
          {" "}
          <span className="ap-title">À Propos</span>
          <div className="ap-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
            aperiam aspernatur consequatur quaerat, exercitationem iste
            accusamus nulla, beatae inventore debitis nesciunt blanditiis.
          </div>
        </div>
      </section>
    </>
  );
}

export default Apropos;
