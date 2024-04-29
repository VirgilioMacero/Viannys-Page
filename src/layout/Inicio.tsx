import inicio from "../assets/img/FruitsAndBooks.webp";
import ViannyLookingPhone from "../assets/img/ViannyLookingPhone.webp";
import PonchiArm from "../assets/img/ponchiArm.webp";
import ViannySmilling from "../assets/img/ViannySmillingWithAGun.webp";

function Inicio() {
  return (
    <div className="bg-[#1F2E1E]">
      <div id="Inicio" className="container">
        <div
          className="grid grid-cols-2 max-[700px]:grid-cols-1 max-[700px]:p-10"
          style={{ fontFamily: "Raleway" }}
        >
          <div className="text-left flex flex-col-reverse pb-[12vw]">
            <div className="text-[#ffffff]">
              <h1
                className="text-[60px] max-[1024px]:text-[45px]"
                style={{
                  fontFamily: "Plus Jakarta Sans",
                  fontWeight: "bolder",
                }}
              >
                VIANNY
              </h1>
              <h1
                className="text-[60px] max-[1024px]:text-[45px]"
                style={{
                  fontFamily: "Plus Jakarta Sans",
                  fontWeight: "bolder",
                }}
              >
                MACERO
              </h1>

              <h1 className="text-[30px] max-[1024px]:text-[35px]">
                NUTRICIONISTA INTEGRAL Y DEPORTIVA
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 max-[700px]:mt-2  ">
            <div className="-mt-20 max-[700px]:mt-0">
              <div className="grid grid-cols-1 gap-4">
                <div className="w-full">
                  <img
                    height="50%"
                    width="100%"
                    className="float-right rounded-2xl"
                    src={ViannyLookingPhone}
                  ></img>
                </div>
                <div className="w-full">
                  <img
                    height="50%"
                    width="100%"
                    className="float-right rounded-2xl"
                    src={inicio}
                  ></img>
                </div>
              </div>
            </div>
            <div className="pt-0 -mt-36 max-[700px]:mt-0">
              <div className="grid grid-cols-1 gap-4">
                <div className="w-full">
                  <img
                    height="50%"
                    width="100%"
                    className="rounded-b-2xl max-[700px]:rounded-2xl"
                    src={PonchiArm}
                  ></img>
                </div>
                <div className="w-full">
                  <img
                    height="50%"
                    width="100%"
                    className="rounded-2xl"
                    src={ViannySmilling}
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
