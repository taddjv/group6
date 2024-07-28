import "./App.css";
import Banner from "./components/Banner";
// import NotreEquipe from "./components/NotreEquipe.jsx";
import Apropos from "./components/Apropos";
import Navigation from "./components/Navigation";
import NosServices from "./components/NosServices";
import Form from "./components/Form";

function App() {
  return (
    <>
      <Navigation></Navigation>
      <Banner></Banner>
      <Apropos></Apropos>
      <NosServices></NosServices>
==
      <Form></Form>
=
    </>
  );
}

export default App;
