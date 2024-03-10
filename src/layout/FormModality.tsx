// import Divider from "../components/Divider";
import FormFilling from "../assets/img/FormFilling.webp";
import Button from "../components/Button";
import Modal from "../components/Modal";

export default function FormModality() {
  function redirect(url: string) {
    window.open(url, "_blank");
  }
  return (
    <>
      {/* <Divider id="" mb="100px" mt="100px" /> */}
      <div
        id="FormModality"
        className="grid grid-cols-2 gap-4 max-[700px]:grid-cols-1"
      >
        <div className="max-[700px]:p-20 max-[700px]:row-start-2">
          <img src={FormFilling} loading="lazy" alt="Online Modality" />
        </div>
        <div className="grid grid-cols-1 align-middle self-center gap-6 max-[700px]:col-row-1 text-center">
          <div>
            <h1
              className="text-[50px] text-center"
              style={{ fontFamily: "Raleway" }}
            >
              MODALIDAD<br></br> FORMULARIO
            </h1>
            <p className="text-justify px-4 mt-3">
              En esta asesoría nos comunicaremos a través de un formulario que
              te haré llegar al correo, es igual de efectiva que una sesión
              online o presencial., ya que en el fromulario recopilaré toda la
              información necesaria sobre tus hábitos, objetivos, estilo de
              vida, entre otros... para así crear un plan de alimentación que se
              adapte 100% a tu vida.
            </p>
          </div>
          <div className="justify-center h-16 align-middle">
            <Button
              onClick={() =>
                // @ts-ignore
                document.getElementById("modal-form-modality").showModal()
              }
              name="Click aquí"
              className="focus:bg-white hover:bg-gray-700 hover:text-white"
            />
            <Modal modalName="modal-form-modality">
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
                      "https://encuadrado.com/s/vianny-macero/atencion-nutricional-por-formulario/"
                    );
                  }}
                  className="focus:bg-white hover:bg-gray-700 hover:text-white rounded-lg"
                  name="Por Primera Vez"
                />
                <Button
                  onClick={() =>
                    redirect(
                      "https://encuadrado.com/s/vianny-macero/atencion-nutricional-por-formulario/"
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
      </div>
    </>
  );
}
