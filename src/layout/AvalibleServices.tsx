import Message from "../components/Message";
import SegmentTitle from "../components/SegmentTitle";
import Image from "../components/Image";

function AvalibleServices() {
  return (
    <>
      <div className="divider" style={{ marginTop: "100px" }}></div>
      <div className="container">
        <div className="row">
          <SegmentTitle text="ATENCIONES DISPONIBLES" />
        </div>
        <div className="row" style={{ marginTop: "100px" }}>
          <div className="col s6 service-image">
            <Image
              route={"/src/img/asesoria_nutricional.png"}
              useClass="responsive-img center"
              url=""
            />
          </div>
          <div className="col s6 service-image">
            <Image
              route="/src/img/Talleres Educativos.png"
              useClass="responsive-img center"
              url=""
            />
          </div>
        </div>
        <div className="row">
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
