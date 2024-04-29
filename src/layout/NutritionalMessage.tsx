import Message from "../components/Message";
import Divider from "../components/Divider";
import ViannySmilling from "../assets/img/ViannySmillingOnFruit.png";
function NutritionalMessage() {
  return (
    <>
      <Divider id="" mt="0px" mb="0px" className="bg-[#1F2E1E] pt-[100px]" />
      <div className="h-[800px] grid grid-cols-2 p-10 nutritional-message-bg">
        <div className="text-left max-[950px]:col-span-2 ">
          <Message
            usedClass=" text-3xl font-bold  max-[700px]:text-2xl "
            data={`LA VERDAD ES... QUE NO ME IMPORTA TU PESO.`}
          />
          <Message
            usedClass=" text-4xl mt-4 max-[700px]:text-3xl max-[400px]:text-xl"
            data="Mi enfoque tiene como objetivo abordarte de forma integral, es decir, conocer y trabajar en base a
            tu mente, cuerpo y estilo de vida."
          />
        </div>
        <div className="row-start-2 col-span-2  flex justify-center">
          <img
            className="min-[950px]:hidden h-[30em]"
            src={ViannySmilling}
            style={{ filter: "drop-shadow(10px 0px black)" }}
            alt=""
          />
        </div>
        <div
          className="row-start-3 col-span-2 text-center font-extrabold text-3xl flex flex-col-reverse "
          style={{ fontFamily: "Raleway" }}
        >
          <h1>PORQUE ERES UN SER INTEGRAL.</h1>
        </div>
      </div>
    </>
  );
}

export default NutritionalMessage;
