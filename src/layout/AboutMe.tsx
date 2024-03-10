import perfilImage from "../assets/img/ViannyLookingLaptop.webp";
import Divider from "../components/Divider";
import Message from "../components/Message";

export default function AboutMe() {
  return (
    <>
      <Divider id="about" mb="100px" mt="100px" />
      <div className="container grid grid-cols-2 gap-10 max-[700px]:grid-cols-1 max-[700px]:grid-rows-2">
        <div className="w-full max-[700px]:row-start-2 flex justify-center">
          <img
            src={perfilImage}
            className="w-full max-[700px]:row-start-2 max-[700px]:w-[350px]"
            alt="About Me"
          ></img>
        </div>
        <div className="grid grid-cols-1 ">
          <div className="flex flex-row-reverse max-[700px]:row-start-1">
            <Message
              data="NUTRICIÓN 
 INTEGRAL
Y DEPORTE "
              usedClass="text-xl max-[670px]:mr-[10.5px]"
            />
          </div>
          <div className="max-[700px]:p-4">
            <h1
              style={{ fontFamily: "League script", fontWeight: "bold" }}
              className="text-[60px]"
            >
              sobre mi
            </h1>
            <p>
              Si estás buscando una nutricionista que te ayude a alcanzar tus
              objetivos de salud y bienestar de una manera integral, has llegado
              al lugar correcto.
              <br />
              <br /> quiero Ayudarte a alcanzar tus metas a través de una
              alimentación saludable y balanceada, siempre considerando los
              distintos aspectos de tu vida y tu día a día, ya que mi atención
              es integral.
              <br />
              <br /> Ya sea que busques mejorar tu rendimiento deportivo 🏋🏻,
              reducir tu inflamación🫄🏻, mejorar tu relación con la comida 💘,
              aumentar tu energía ⚡️o mejorar tu salud en general, estaré a tu
              lado en cada paso del camino.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
