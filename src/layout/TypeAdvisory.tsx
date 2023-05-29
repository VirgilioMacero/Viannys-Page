import SegmentTitle from "../components/SegmentTitle";
import Image from "../components/Image";

function TypeAdvisory() {
  return (
    <>
      <div className="divider" style={{ marginTop: "100px" }}></div>
      <div className="container">
        <div className="row">
          <SegmentTitle text="ASESORIAS NUTRICIONALES" />
        </div>
        <div className="row" style={{marginTop:"100px",marginBottom:"100px"}}>
          <div className="col s4 service-image">
            <Image
              route="/src/img/Presencial.png"
              useClass="responsive-img left"
              url=""
            />
          </div>

          <div className="col s4 service-image">
            <Image
              route="/src/img/Formulario.png"
              useClass="responsive-img"
              url=""
            />
          </div>

          <div className="col s4 service-image">
            <Image
              route="/src/img/Online.png"
              useClass="responsive-img right"
              url=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default TypeAdvisory;
