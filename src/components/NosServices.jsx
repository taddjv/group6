import React, { useEffect } from "react";
import "../style/nosServices.css";
import insurance from "../assets/insurance.svg";
import savings from "../assets/savings.svg";
import investing from "../assets/investing.svg";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function NosServices() {
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
      <motion.section
        id="nos-services"
        className="nos-services"
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={squareVariants}
      >
        <div className="ns-card">
          <img className="nsc-logo" src={insurance} />
          <div className="nsc-title">Assurance</div>
          <div className="nsc-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            repudiandae similique unde deserunt nihil recusandae ipsum,
            consequatur porro pariatur placeat autem temporibus doloremque at.
            Dicta odio incidunt cupiditate nesciunt quae?
          </div>
        </div>
        <div className="ns-card">
          <img className="nsc-logo" src={savings} />
          <div className="nsc-title">Épargne</div>
          <div className="nsc-text">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            repudiandae similique unde deserunt nihil recusandae ipsum,
            consequatur porro pariatur placeat autem temporibus doloremque at.
            Dicta odio incidunt cupiditate nesciunt quae?
          </div>
        </div>
        <div className="ns-card">
          <img className="nsc-logo" src={investing} />
          <div className="nsc-title">Placements</div>
          <div className="nsc-text">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            repudiandae similique unde deserunt nihil recusandae ipsum,
            consequatur porro pariatur placeat autem temporibus doloremque at.
            Dicta odio incidunt cupiditate nesciunt quae?
          </div>
        </div>
      </motion.section>
    </>
  );
}
export default NosServices;
