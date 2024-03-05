import Message from "../components/Message";
import Divider from "../components/Divider";

function SecondPart() {
  return (
    <>
      <Divider id="about" mt="100px" mb="100px" />
      <div className="container z-depth-4">
        <div className="row">
          <Message
            usedClass="col s12 Message-arial my-[150px]"
            data={` 

    ENFOQUE NO PESO CENTRISTA 
    NO SUFRAS EN EL PROCESO
  JUNTOS CUMPLIREMOS TUS OBJETIVOS
           
           `}
          />
          <div className="divider"></div>
        </div>
      </div>
    </>
  );
}

export default SecondPart;
