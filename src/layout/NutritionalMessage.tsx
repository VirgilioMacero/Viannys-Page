import Message from "../components/Message";
import Divider from "../components/Divider";
function NutritionalMessage() {
  return (
    <>
      <Divider id="" mt="100px" mb="100px" />
      <div className="container z-depth-4">
        <div className="row">
          <Message
            usedClass="col s12 nutritional-message mt-[150px] max-[700px]:text-[70px]"
            data={`La verdad es... que no me importa tu peso. \n Mi enfoque de atención no sólo considera tu \n alimentación, también voy a abordar tu \n mente, cuerpo y espíritu. `}
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
