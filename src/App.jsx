import "./App.css";
import banner from "./assets/peopleBackground.jpeg";
import logo from "./assets/greenLogo.png";
import DownArrow from "./assets/downArrow.png";
import NotreEquipe from "./components/NotreEquipe.jsx";
import Apropos from "./components/Apropos";

function App() {
  return (
    <>
      <header>
        <a href="/" className="logo">
          <img className="logoImage" src={logo} alt="Logo" />
        </a>
        <div className="links">
          <a href="#a-propos">À propos</a>
          <a href="#notre-equipe">Notre équipe</a>
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
      <Apropos></Apropos>
      <section id="notre-equipe" className="hidden notreEquipe">
        <NotreEquipe></NotreEquipe>
      </section>
      <div className="nosServices"></div>
      {/* <div className="blog"></div> */}
      <div className="nousJoindre"></div>
    </>
  );
}

export default App;
