import "./css/App.css";
import Header from "./components/Header";
import Inicio from "./components/Inicio";
import SecondPart from "./layout/SecondPart";
import AvalibleServices from "./layout/AvalibleServices";
import TypeAdvisory from "./layout/TypeAdvisory";
function App() {
  return (
    <>
      <Header />
      <Inicio />
      <SecondPart/>
      <AvalibleServices/>
      <TypeAdvisory/>
      
    </>
  );
}

export default App;
