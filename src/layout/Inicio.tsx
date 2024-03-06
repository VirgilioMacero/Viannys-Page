import inicio from "../assets/img/FruitsAndBooks.webp";
import ViannyLookingPhone from "../assets/img/ViannyLookingPhone.webp";
import ViannyOnBooks from "../assets/img/ViannyLookingLeft.webp";
import FruitAndPhone from "../assets/img/FruitsAndPhone.webp";

function Inicio() {
  return (
    <div id="Inicio" className="container">
      <div
        className="grid grid-cols-2 max-[700px]:grid-cols-1"
        style={{ fontFamily: "Raleway" }}
      >
        <div className="self-center ">
          <h1 className="text-5xl mt-40">
            NUTRICIONISTA <br></br>VIANNY MACERO
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-4 max-[700px]:mt-20  ">
          <div className="-mt-20 max-[700px]:mt-10">
            <div className="grid grid-cols-1 gap-4">
              <div className="w-full">
                <img
                  height="50%"
                  width="100%"
                  className="float-right"
                  src={inicio}
                ></img>
              </div>
              <div className="w-full">
                <img
                  height="50%"
                  width="100%"
                  className="float-right"
                  src={ViannyLookingPhone}
                ></img>
              </div>
            </div>
          </div>
          <div className="pt-0">
            <div className="grid grid-cols-1 gap-4">
              <div className="w-full">
                <img height="50%" width="100%" src={ViannyOnBooks}></img>
              </div>
              <div className="w-full">
                <img height="50%" width="100%" src={FruitAndPhone}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
