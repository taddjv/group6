import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "../notreEquipe.css";

function Apropos() {
  return (
    <>
      {/* <AnimationOnScroll animateIn="fadeIn" delay={10} duration={3}> */}
      <section id="a-propos" className="hidden aPropos">
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
      </section>
      {/* </AnimationOnScroll> */}
    </>
  );
}

export default Apropos;
