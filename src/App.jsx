import "./App.css";
import banner from "./assets/peopleBackground.jpeg";
import DownArrow from "./assets/downArrow.png";
import NotreEquipe from "./components/NotreEquipe.jsx";
import Apropos from "./components/Apropos";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation></Navigation>

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
