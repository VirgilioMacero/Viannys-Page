import Message from "../components/Message";

function SecondPart() {
  return (
    <>
      <div className="divider"></div>
      <div className="container z-depth-4" style={{ marginTop: "100px" }}>
        <div className="row">
          <Message
            usedClass="col s12 Message-arial"
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
