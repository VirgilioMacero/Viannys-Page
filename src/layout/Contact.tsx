import Divider from "../components/Divider";
import ViannySmillingToLaptopCoffe from "../assets/img/ViannySmillingToCoffeAndLaptop.webp";
import Message from "../components/Message";
import TextInput from "../components/TextInput";
import emailJs from "@emailjs/browser";
import { useState } from "react";

export default function Contact() {
  emailJs.init({
    publicKey: "HRuVZG2TdB8wpupM8",
  });

  const [formValues, setFormValues] = useState({
    from_name: "",
    from_mail: "",
    from_phone: "",
    message: "",
  });
  // @ts-ignore
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  // @ts-ignore
  const handleSubmit = (event) => {
    event.preventDefault();
    emailJs.send("service_4mja4gp", "template_gsyafue", formValues).then(
      () => {
        console.log("Email Sent");
        setFormValues({
          from_name: "",
          from_mail: "",
          from_phone: "",
          message: "",
        });
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
  };

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
              id="contact-form"
              onSubmit={handleSubmit}
              method="POST"
              style={{ fontFamily: "Raleway" }}
            >
              <div className="max-[670px]:w-[95%]">
                <p>NOMBRE COMPLETO</p>
                <TextInput
                  id="from_name"
                  type="text"
                  placeholder=""
                  name="from_name"
                  value={formValues.from_name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="max-[670px]:w-[95%]">
                <p>CORREO ELECTRÓNICO</p>
                <TextInput
                  id="from_mail"
                  type="email"
                  placeholder=""
                  name="from_mail"
                  value={formValues.from_mail}
                  onChange={handleInputChange}
                />
              </div>
              <div className="max-[670px]:w-[95%]">
                <p>NÚMERO DE TELÉFONO</p>
                <TextInput
                  id="from_phone"
                  type="tel"
                  placeholder=""
                  name="from_phone"
                  value={formValues.from_phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="w-full max-[670px]:w-[95%]">
                <p>¿COMO PUEDO AYUDARTE?</p>
                <textarea
                  id="message"
                  placeholder=""
                  style={{
                    border: "1px solid black",
                    paddingLeft: "7px",
                    width: "101.5%",
                  }}
                  name="message"
                  value={formValues.message}
                  onChange={handleInputChange}
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
