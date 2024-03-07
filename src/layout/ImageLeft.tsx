import Divider from "../components/Divider";
import ViannyLookingLaptop from "../assets/img/ViannyLookingLaptop.webp";
import Button from "../components/Button";

export default function ImageLeft() {
  return (
    <>
      <Divider id="OnlineModality" mb="100px" mt="100px" />
      <div className="grid grid-cols-2 gap-4 max-[700px]:grid-cols-1">
        <div className="max-[700px]:p-20">
          <img src={ViannyLookingLaptop} alt="Online Modality" />
        </div>
        <div className="grid grid-cols-1 align-middle self-center gap-6 max-[700px]:col-row-1 text-center">
          <div>
            <h1
              className="text-[50px] text-center"
              style={{ fontFamily: "Raleway" }}
            >
              MODALIDAD<br></br> ONLINE
            </h1>
            <p className="text-justify px-4 mt-3">
              Asesoría nutricional por videollamada, con una duración de 60
              minutos donde conversaremos sobre tus hábitos, gustos, estilo de
              vida, objetivos nutricionales, entre otros temas para poder
              conocerte bien y así crear un plan de alimentación que se adapte
              100% a tu vida.
            </p>
          </div>
          <div className="justify-center h-16 align-middle">
            <Button link="" name="Click aquí" className="" />
          </div>
        </div>
      </div>
    </>
  );
}
