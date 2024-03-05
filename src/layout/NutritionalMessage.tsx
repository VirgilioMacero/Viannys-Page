import Message from "../components/Message";
import Divider from "../components/Divider";
function NutritionalMessage() {
  return (
    <>
      <Divider id="" mt="100px" mb="100px" />
      <div className="container z-depth-4">
        <div className="row">
          <Message
            usedClass="col s12 nutritional-message mt-[150px]"
            data={` 

         MI ENFOQUE DE TRATAMIENTO NO SOLO CONSIDERA TU ALIMENTACION. 

            ES IGUAL DE IMPORTANTE ABORDAR TU MENTE, CUERPO Y ESPIRITU.
           
           `}
          />
          <div className="row">
            <Message
              data="     Porque la salud es multifacética"
              usedClass="col s12 nutritional-message-styled"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default NutritionalMessage;
