import "./App.css";
import Banner from "./components/Banner";
import NotreEquipe from "./components/NotreEquipe.jsx";
import Apropos from "./components/Apropos";
import Navigation from "./components/Navigation";
import NosServices from "./components/NosServices";

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Banner></Banner>
      <Apropos></Apropos>
      <NosServices></NosServices>
      <section id="notre-equipe" className="hidden notreEquipe">
        <NotreEquipe></NotreEquipe>
      </section>
      {/* <div className="blog"></div> */}
      <div className="nousJoindre"></div>
    </>
  );
}

export default App;
