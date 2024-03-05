import "./css/App.css";
import Header from "./components/Header";
import Inicio from "./layout/Inicio";
import SecondPart from "./layout/SecondPart";
import AvalibleServices from "./layout/AvalibleServices";
import TypeAdvisory from "./layout/TypeAdvisory";
import NutritionalMessage from "./layout/NutritionalMessage";
import Resume from "./layout/Resume";
import Reviews from "./layout/Reviews";
import AboutMe from "./layout/AboutMe";
function App() {
  return (
    <>
      <Header />
      <Inicio />
      <NutritionalMessage />
      <AboutMe />
      <Resume />
      <SecondPart />
      <AvalibleServices />
      <TypeAdvisory />
      <Reviews />
    </>
  );
}

export default App;
