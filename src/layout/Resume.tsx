import Experience from "../components/Experience";
import fotoPerfil from "../assets/img/Presentacion.png";

function Resume() {
  return (
    <>
      <div
        className="divider"
        style={{ marginTop: "100px", marginBottom: "100px" }}
      ></div>
      <div className="container">
        <div className="row">
          <div className="col s6">
            <h1 className="resume-title">Mis estudios</h1>
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
          <div className="col s6">
            <img
              className="presentation responsive-image"
              src={fotoPerfil}
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;
