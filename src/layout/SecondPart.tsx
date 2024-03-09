import Message from "../components/Message";
import Divider from "../components/Divider";

function SecondPart() {
  return (
    <>
      <Divider id="" mt="100px" mb="100px" />
      <div className="container">
        <div className="row">
          <Message
            usedClass="col s12 Message-arial my-[150px] font-bold"
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
