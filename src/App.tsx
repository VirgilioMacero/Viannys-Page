import "./css/App.css";
import Header from "./components/Header";
import Inicio from "./layout/Inicio";
import SecondPart from "./layout/SecondPart";
// import AvalibleServices from "./layout/AvalibleServices";
import TypeAdvisory from "./layout/TypeAdvisory";
import NutritionalMessage from "./layout/NutritionalMessage";
import Resume from "./layout/Resume";
import Reviews from "./layout/Reviews";
import AboutMe from "./layout/AboutMe";
import ImageLeft from "./layout/ImageLeft";
import ImageRight from "./layout/ImageRight";
import FormModality from "./layout/FormModality";
import FAQButton from "./layout/FAQButton";
import FAQS from "./layout/FAQS";
import Contact from "./layout/Contact";
function App() {
  return (
    <>
      <Header />
      <Inicio />
      <NutritionalMessage />
      <AboutMe />
      <Resume />
      <SecondPart />
      {/* <AvalibleServices /> */}
      <TypeAdvisory />
      <Reviews />
      <ImageLeft />
      <ImageRight />
      <FormModality />
      <FAQButton />
      <FAQS />
      <Contact />
    </>
  );
}

export default App;
