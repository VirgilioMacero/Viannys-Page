import Divider from "../components/Divider";
import ViannySmillingToLaptopCoffe from "../assets/img/ViannySmillingToCoffeAndLaptop.webp";
import Message from "../components/Message";
import TextInput from "../components/TextInput";

export default function Contact() {
  return (
    <>
      <Divider id="" mb="100px" mt="100px" />

      <div
        id="contacto"
        className="container grid grid-cols-2 max-[700px]:grid-cols-1 gap-10"
      >
        <div>
          <div className="grid gap-5 max-[670px]:ml-4">
            <Message
              data="NUTRICIÓN 
 INTEGRAL
Y DEPORTE "
              usedClass="text-xl"
            />

            <form
              action="https://formsubmit.co/nutri.vmacero@gmail.com"
              method="POST"
              style={{ fontFamily: "Raleway" }}
            >
              <div className="max-[670px]:w-[95%]">
                <p>NOMBRE COMPLETO</p>
                <TextInput
                  id="Nombre"
                  type="text"
                  placeholder=""
                  name="Nombre"
                />
              </div>
              <div className="max-[670px]:w-[95%]">
                <p>CORREO ELECTRÓNICO</p>
                <TextInput
                  id="Correo"
                  type="email"
                  placeholder=""
                  name="Correo"
                />
              </div>
              <div className="max-[670px]:w-[95%]">
                <p>NÚMERO DE TELÉFONO</p>
                <TextInput
                  id="Telefono"
                  type="tel"
                  placeholder=""
                  name="Telefono"
                />
              </div>
              <div className="max-[670px]:w-[95%]">
                <p>¿COMO PUEDO AYUDARTE?</p>
                <TextInput
                  id="Mensaje"
                  type="text"
                  placeholder=""
                  name="Mensaje"
                />
              </div>
              <div className="text-center">
                <button
                  className="border-2 border-black px-8 py-3 focus:bg-white hover:bg-gray-700 hover:text-white"
                  type="submit"
                >
                  ENVIAR
                </button>
              </div>
              <input
                type="hidden"
                name="_subject"
                value="New submission!"
              ></input>
              <input
                type="hidden"
                name="_next"
                value="https://nutri.macero.cl"
              ></input>
            </form>
          </div>
        </div>

        <div>
          <img
            src={ViannySmillingToLaptopCoffe}
            loading="lazy"
            height="100%"
            width="100%"
            alt="Vianny Smilling"
          />
        </div>
      </div>
      <Divider mt="100px" mb="" id="" />
    </>
  );
}
