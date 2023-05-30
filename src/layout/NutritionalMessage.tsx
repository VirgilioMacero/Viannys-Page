import Message from "../components/Message";
function NutritionalMessage() {
  return (
    <>
      <div className="divider" style={{ marginTop: "100px",marginBottom:"100px" }}></div>
        <div className="container z-depth-4">
            <div className="row">
            <Message
            usedClass="col s12 nutritional-message"
            data={` 

         MI ENFOQUE DE TRATAMIENTO NO SOLO CONSIDERA TU ALIMENTACION. 

            ES IGUAL DE IMPORTANTE ABORDAR TU MENTE, CUERPO Y ESPIRITU.
           
           `}
          />
          <div className="row">

            <Message data="     Porque la salud es multifacética" usedClass="col s12 nutritional-message-styled"/>

          </div>
            </div>

        </div>


    </>
  );
}

export default NutritionalMessage;
