import Message from "../components/Message";
import SegmentTitle from "../components/SegmentTitle";
import Image from "../components/Image";
import Divider from "../components/Divider";
import firstImage from "../assets/img/ViannyWithOrange.webp";
import secondImage from "../assets/img/ViannySmilingonBooks.webp";

function AvalibleServices() {
  return (
    <>
      <Divider id="Servicios" mt="100px" mb="0px" />
      <div className="container">
        <SegmentTitle
          titleLeft={true}
          titleRigth={false}
          text="¿QUE BUSCAS?"
          className="text-center justify-center font-bold"
          titleClasses="max-[950px]:text-[250%]"
        />
        <div
          className="grid grid-cols-2 gap-4 max-[700px]:grid-cols-1"
          style={{ marginTop: "100px" }}
        >
          <div className="place-self-center">
            <Image
              route={firstImage}
              firsText="Asesoria"
              secodText="Nutricionale"
              url="https://encuadrado.com/p/vianny-macero/"
            />
          </div>
          <div className="place-self-center">
            <Image
              route={secondImage}
              firsText="Talleres"
              secodText="Educativos"
              url="https://encuadrado.com/p/vianny-macero/"
            />
          </div>
        </div>
        <div className="row mt-10">
          <Message
            data="
            
  si no sabes qué la atención necesitas,
contáctame y encontraremos la adecuada para ti

            "
            usedClass="col s12 center subMessage"
          />
        </div>
      </div>
    </>
  );
}

export default AvalibleServices;
