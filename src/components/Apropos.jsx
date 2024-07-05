import React, { useEffect } from "react";
import "../style/aPropos.css";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
      <motion.section
        id="a-propos"
        className="aPropos"
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={squareVariants}
      >
        <div className="ap-title">À Propos</div>
        <div className="ap-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
          aperiam aspernatur consequatur quaerat, exercitationem iste accusamus
          nulla, beatae inventore debitis nesciunt blanditiis. Explicabo dolores
          maiores illo repellendus fugit ad atque. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Harum aperiam aspernatur consequatur
          quaerat, exercitationem iste accusamus nulla, beatae inventore debitis
          nesciunt blanditiis. Explicabo dolores maiores illo repellendus fugit
          ad atque.
        </div>
      </motion.section>
    </>
  );
}

export default Apropos;
