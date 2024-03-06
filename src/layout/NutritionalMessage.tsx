import Message from "../components/Message";
import Divider from "../components/Divider";
function NutritionalMessage() {
  return (
    <>
      <Divider id="" mt="100px" mb="100px" />
      <div className="container">
        <Message
          usedClass=" nutritional-message text-3xl  max-[700px]:text-2xl"
          data={`La verdad es... <strong >que no me importa tu peso.</strong> \n Mi enfoque de atención no sólo considera tu \n alimentación, también voy a abordar tu \n <strong>mente, cuerpo y espíritu.</strong>`}
        />
        <Message
          data="     Porque la salud es multifacética"
          usedClass="nutritional-message-styled text-4xl mt-4 max-[700px]:text-3xl "
        />
      </div>
    </>
  );
}

export default NutritionalMessage;
