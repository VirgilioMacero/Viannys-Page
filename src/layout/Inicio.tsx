import nombre from "../assets/img/Nombre.png";
import inicio from "../assets/img/FruitsAndBooks.webp";
import ViannyLookingPhone from "../assets/img/ViannyLookingPhone.webp";
import ViannyOnBooks from "../assets/img/ViannyLookingLeft.webp";
import FruitAndPhone from "../assets/img/FruitsAndPhone.webp";

function Inicio() {
  return (
    <div id="Inicio" className="container">
      <div
        className="grid grid-cols-2 max-[700px]:grid-cols-1 max-[700px]:mt-32"
        style={{ fontFamily: "Raleway" }}
      >
        <div className="self-end">
          <h1 className="text-5xl">
            NUTRICIONISTA <br></br>VIANNY MACERO
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="-mt-10 max-[700px]:mt-10">
            <div className="grid grid-cols-1 gap-4">
              <div className="w-full">
                <img
                  height="250px"
                  width="250px"
                  className="float-right"
                  src={inicio}
                ></img>
              </div>
              <div className="w-full">
                <img
                  height="250px"
                  width="250px"
                  className="float-right"
                  src={ViannyLookingPhone}
                ></img>
              </div>
            </div>
          </div>
          <div className="pt-10 max-[700px]:pt-0">
            <div className="grid grid-cols-1 gap-4">
              <img height="250px" width="250px" src={ViannyOnBooks}></img>
              <img height="250px" width="250px" src={FruitAndPhone}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
