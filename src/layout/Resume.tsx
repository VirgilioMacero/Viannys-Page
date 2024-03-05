import Experience from "../components/Experience";
import Divider from "../components/Divider";
import fotoPerfil from "../assets/img/ViannySmilingonBooks.webp";
import Message from "../components/Message";

function Resume() {
  return (
    <>
      <Divider id="" mt="100px" mb="100px" />
      <div className="container grid grid-cols-2 max-[700px]:grid-cols-1 max-[700px]:grid-rows-2">
        <div className="">
          <div className="flex">
            <Message
              data="NUTRICIÓN 
 INTEGRAL
Y DEPORTE "
              usedClass="text-xl"
            />
          </div>
          <div>
            <h1 className="resume-title text-[60px]">Mis estudios</h1>
            <Experience
              title="TÍTULO DE NUTRICIONISTA"
              info="UNIVERSIDAD DE LOS ANDES"
            />
            <Experience
              title="MENCIÓN NUTRICIÓN DEPORTIVA"
              info="OLD GRANGONIAN CLUB Y CLUB DE FÚTBOL RECOLETA"
            />
            <Experience
              title="DIPLOMADO EN NUTRICIÓN DEPORTIVA"
              info="BARÇA INNOVATION HUB, CLUB DE FÚTBOL BARCELONA"
            />
            <Experience
              title="CERTIFICACIÓN INTERNACIONAL EN PSICONUTRICIÓN"
              info="INSTITUTO VIVE SANO BRASIL"
            />
          </div>
        </div>
        <div className="w-full self-end max-[700px]:row-start-2 flex justify-center max-[700px]:self-center">
          <img
            loading="lazy"
            className="w-full max-[700px]:row-start-2 max-[700px]:w-[350px]"
            src={fotoPerfil}
          ></img>
        </div>
      </div>
    </>
  );
}

export default Resume;
