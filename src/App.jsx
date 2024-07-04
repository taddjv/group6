import "./App.css";
import banner from "./assets/peopleBackground.jpeg";
import logo from "./assets/greenLogo.png";
import picture from "./assets/portrait.jpeg";
import DownArrow from "./assets/downArrow.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
import NotreEquipe from "./components/NotreEquipe.jsx";
import { useRef } from "react";

function App() {
  return (
    <>
      <header>
        <a href="/" className="logo">
          <img className="logoImage" src={logo} alt="Logo" />
        </a>
        <div className="links">
          <a href="#a-propos">À propos</a>
          <a href="#nos-equipe">Notre équipe</a>
          <a href="/">Nos services</a>
          {/* <a href="/">Blog</a> */}
          <a href="/">Nous joindre</a>
        </div>
      </header>

      <section className="banner">
        <img className="bannerImage" src={banner} alt="Logo" />
        <div className="bannerQuote">
          {/* <div className="bq-text">On est ici pour vous aider</div> */}
        </div>
        <a href="#a-propos" className="scroll">
          <div className="scroll-text">Allez en bas</div>
          <img className="scroll-logo" src={DownArrow} />
        </a>
      </section>

      <AnimationOnScroll animateIn="fadeIn" delay={10} duration={3}>
        <section id="a-propos" className="hidden aPropos">
          <div className="ap-title">À Propos</div>
          <div className="ap-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
            aperiam aspernatur consequatur quaerat, exercitationem iste
            accusamus nulla, beatae inventore debitis nesciunt blanditiis.
            Explicabo dolores maiores illo repellendus fugit ad atque. Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Harum aperiam
            aspernatur consequatur quaerat, exercitationem iste accusamus nulla,
            beatae inventore debitis nesciunt blanditiis. Explicabo dolores
            maiores illo repellendus fugit ad atque.
          </div>
        </section>
      </AnimationOnScroll>

      <section id="nos-equipe" className="hidden notreEquipe">
        <NotreEquipe></NotreEquipe>
      </section>
      <div className="nosServices"></div>
      {/* <div className="blog"></div> */}
      <div className="nousJoindre"></div>
    </>
  );
}

export default App;
