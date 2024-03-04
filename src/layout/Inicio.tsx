import nombre from "../assets/img/Nombre.png";
import inicio from "../assets/img/Inicio.png";

function Inicio() {
  return (
    <div id="Inicio" className="container">
      <div className="row">
        <div className="col s6">
          <img
            src={nombre}
            loading="lazy"
            alt="logo"
            className="Name"
            height={"250"}
            width={"250"}
          ></img>
        </div>
        <div className="col s6">
          <img src={inicio}></img>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
