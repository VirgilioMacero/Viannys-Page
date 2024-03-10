import ViannySmilingToFruit from "../assets/img/ViannySmilingToFruit.webp";
import Button from "../components/Button";
// import Divider from "../components/Divider";
import Modal from "../components/Modal";

export default function ImageRight() {
  function redirect(url: string) {
    window.open(url, "_blank");
  }
  return (
    <>
      {/* <Divider id="" mb="100px" mt="100px" /> */}
      <div
        id="PresentialModality"
        className="grid grid-cols-2 gap-4 max-[700px]:grid-cols-1 "
      >
        <div className="grid grid-cols-1 align-middle self-center gap-6 max-[700px]:col-row-1 text-center">
          <div>
            <h1
              className="text-[50px] text-center"
              style={{ fontFamily: "Raleway" }}
            >
              MODALIDAD<br></br> PRESENCIAL
            </h1>
            <p className="text-justify px-8 mt-3">
              Asesoría nutricional presencial a domicilio, con una duración de
              60 - 90 minutos donde conversaremos sobre tus hábitos, gustos,
              estilo de vida, objetivos nutricionales, entre otros temas para
              poder conocerte bien.
              <br></br>
              <br></br>
              Además incluye la toma de medidas antropométricas y así obtener un
              informe de tu composición corporal (Masa muscular, masa grasa,
              masa ósea, etc) y así crear un plan de alimentación que se adapte
              100% a tu vida.
            </p>
          </div>
          <div className="justify-center h-16 align-middle">
            <Button
              onClick={() =>
                // @ts-ignore
                document.getElementById("modal-presential-modality").showModal()
              }
              name="Click aquí"
              className="focus:bg-white hover:bg-gray-700 hover:text-white"
            />
            <Modal modalName="modal-presential-modality">
              <h3
                className="font-bold text-lg"
                style={{ fontFamily: "Raleway" }}
              >
                Selecciona el tipo de asesoria que necesites
              </h3>
              <div className="grid grid-cols-1 gap-4 mt-4">
                <Button
                  onClick={() => {
                    redirect(
                      "https://encuadrado.com/p/vianny-macero/s/primera-asesoria-nutricional-presencial/"
                    );
                  }}
                  className="focus:bg-white hover:bg-gray-700 hover:text-white rounded-lg"
                  name="Por Primera Vez"
                />
                <Button
                  onClick={() =>
                    redirect(
                      "https://encuadrado.com/p/vianny-macero/s/seguimiento-asesoria-nutricional-presencial/"
                    )
                  }
                  className="focus:bg-white hover:bg-gray-700 hover:text-white rounded-lg"
                  name="Control de Seguimiento"
                />
              </div>
              <p className="py-4 flex" style={{ fontFamily: "Raleway" }}>
                <p className=" text-red-500 font-bold">Importante:</p>
                Si han pasado más de 4 meses desde tu última sesión, selecciona
                "Por Primera Vez".
              </p>
            </Modal>
          </div>
        </div>
        <div className="max-[700px]:p-20">
          <img
            src={ViannySmilingToFruit}
            loading="lazy"
            alt="Presencial Modality"
          />
        </div>
      </div>
    </>
  );
}
