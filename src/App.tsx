import "./css/App.css";
import Header from "./components/Header";
import Inicio from "./layout/Inicio";
import SecondPart from "./layout/SecondPart";
import AvalibleServices from "./layout/AvalibleServices";
import TypeAdvisory from "./layout/TypeAdvisory";
import NutritionalMessage from "./layout/NutritionalMessage";
import Resume from "./layout/Resume";
function App() {
  
  return (
    <>
      <Header />
      <Inicio />
      <SecondPart/>
      <AvalibleServices/>
      <TypeAdvisory/>
      <NutritionalMessage/>
      <Resume/>
      
    </>
  );
}

export default App;
