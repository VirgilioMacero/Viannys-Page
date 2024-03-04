import SegmentTitle from "../components/SegmentTitle";
import Image from "../components/Image";
import firstImage from "../assets/img/Presencial.png";
import secondImage from "../assets/img/Formulario.png";
import TirdImage from "../assets/img/Online.png";

function TypeAdvisory() {
  return (
    <>
      <div
        id="Asesorias"
        className="divider"
        style={{ marginTop: "100px" }}
      ></div>
      <div className="container">
        <div className="row">
          <SegmentTitle text="ASESORIAS NUTRICIONALES" />
        </div>
        <div
          className="row"
          style={{ marginTop: "100px", marginBottom: "100px" }}
        >
          <div className="col s4 service-image">
            <Image route={firstImage} useClass="responsive-img left" url="" />
          </div>

          <div className="col s4 service-image">
            <Image route={secondImage} useClass="responsive-img" url="" />
          </div>

          <div className="col s4 service-image">
            <Image route={TirdImage} useClass="responsive-img right" url="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default TypeAdvisory;
