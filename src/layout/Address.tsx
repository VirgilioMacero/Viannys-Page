import Divider from "../components/Divider";
import Logo from "../components/Logo";

export default function Address() {
  return (
    <>
      <Divider mb="100px" mt="100px" id="" className="" />
      <div className="container flex ">
        <Logo className="h-[80px] w-[80px]" />
      </div>
      <div
        id="Address"
        className="container flex flex-row gap-20 mt-20 max-[700px]:flex-col"
      >
        <div>
          <h1
            className="text-6xl"
            style={{ fontFamily: "Plus Jakarta Sans", fontWeight: "lighter" }}
          >
            UBICACIÓN
          </h1>
          <a
            className=""
            target="__blank"
            href="https://maps.app.goo.gl/ozucP3CDMDRGDQbu8"
          >
            <p
              className="mt-10 text-2xl hover:underline"
              style={{ fontFamily: "Raleway" }}
            >
              Avenida Nueva Providencia 2250, Providencia. Piso 6 - Oficina 604
              <br />A pasos del Metro Los Leones
            </p>
          </a>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3330.0563391376277!2d-70.6111831!3d-33.4217755!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf9c37b02309%3A0x90a0dc942e6fe7df!2sArriendo%20de%20box%20y%20m%C3%A1s%20-%20Centro%20Amanece%20Providencia!5e0!3m2!1ses!2sus!4v1710273743307!5m2!1ses!2sus"
            className="w-[50vw] h-[450px] max-[700px]:w-full"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
}
