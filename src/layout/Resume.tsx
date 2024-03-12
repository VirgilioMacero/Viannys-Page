import Experience from "../components/Experience";
import Divider from "../components/Divider";
import fotoPerfil from "../assets/img/ViannySmilingonBooks.webp";
import Message from "../components/Message";

function Resume() {
  function convertirMayusculas(texto: string) {
    if (typeof texto === "string") {
      return texto.toUpperCase();
    } else {
      // Manejar el caso cuando la entrada no es una cadena
      return "Error: La entrada no es una cadena";
    }
  }
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
              usedClass="text-xl max-[670px]:ml-[10.5px]"
            />
          </div>
          <div>
            <h1 className="resume-title text-[60px]">MIS ESTUDIOS</h1>
            <Experience
              title={convertirMayusculas(
                "Título de Nutricionista mención deporte"
              )}
              info={convertirMayusculas("Universidad de Los AndeS - CHILE")}
            />
            <Experience
              title={convertirMayusculas("master en coaching y mindfulness")}
              info={convertirMayusculas("eneb x universidad isabel i - españa")}
            />
            <Experience
              title={convertirMayusculas("Diplomado en Nutrición Deportiva")}
              info={convertirMayusculas(
                "Barça Innovation Hub, Club de Fútbol Barcelona - ESPAña"
              )}
            />
            <Experience
              title={convertirMayusculas("CERTIFICACIÓN ISAK NIVEL 1")}
              info={convertirMayusculas("STRONG AND FIT CENTER - chile")}
            />
            <Experience
              title={convertirMayusculas(
                "CERITIFCAción internacional en psiconutrición"
              )}
              info={convertirMayusculas("instituto vive sano - brasil")}
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
