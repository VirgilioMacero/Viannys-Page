import { useState } from "react";
import perfilImage from "../assets/img/ViannySmillingOnAChair.png";
import Divider from "../components/Divider";
import Message from "../components/Message";

export default function AboutMe() {
  const [showMore, setShowMore] = useState(false);
  const data = `Nací y crecí en Venezuela, y llegué a Chile en el año 2018, donde inicié mis estudios universitarios, la nutrición siempre fue mi pasión, inicialmente con enfoque deportivo y a medida que avancé en mis estudios entendí la importancia de considerar todos aspectos, especialmente la parte psicológica, por lo que profundicé y sigo en constante busqueda de ampliar mis estudios tanto en nutrición deportiva como en psiconutrición, mindfulness y coaching.

  Quiero ayudarte a alcanzar tus objetivos de salud y bienestar de una manera integral, para que puedas mejorar tu calidad de vida de una forma sostenible al largo plazo.`;

  return (
    <>
      <Divider id="about" mb="100px" mt="0px" className="" />
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
          <div className="max-[700px]:p-10">
            <h1
              style={{ fontFamily: "Plus Jakarta Sans", fontWeight: "lighter" }}
              className="text-[60px]"
            >
              SOBRE MI
            </h1>
            <p
              className="mt-10 pr-[77px] max-[700px]:pr-0 text-justify text-xl"
              style={{ fontFamily: "Raleway" }}
            >
              {showMore ? data : `${data.substring(0, 250) + "......"}`}
            </p>
            <button
              className="focus:bg-transparent"
              onClick={() => setShowMore(!showMore)}
            >
              <strong>{showMore ? "(Ver menos)" : "(Ver mas)"}</strong>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
