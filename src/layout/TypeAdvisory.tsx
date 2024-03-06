import SegmentTitle from "../components/SegmentTitle";
import Image from "../components/Image";
import Divider from "../components/Divider";
import firstImage from "../assets/img/Presencial.png";
import secondImage from "../assets/img/viannySmillingLaptop.webp";
import TirdImage from "../assets/img/LaptopForm.png";

function TypeAdvisory() {
  return (
    <>
      <Divider id="Asesorias" mt="100px" mb="100px" />

      <div className="container">
        <SegmentTitle
          text="ASESORIAS NUTRICIONALES"
          titleLeft={true}
          className="mt-0 justify-end"
          titleClasses="col-start-3 max-[950px]:text-[230%] max-[950px]:col-span-2 max-[400px]:text-3xl"
          titleRigth={false}
        />

        <div
          className=" grid grid-cols-3 place-items-center gap-4 max-[1025px]:grid-cols-2 max-[700px]:grid-cols-1"
          style={{
            marginTop: "100px",
            marginBottom: "100px",
          }}
        >
          <Image
            route={firstImage}
            url="https://encuadrado.com/p/vianny-macero/"
            firsText=""
            secodText=""
          />

          <Image
            route={secondImage}
            url="https://encuadrado.com/p/vianny-macero/"
            firsText="Online"
            secodText="(Videollamada)"
          />

          <Image
            route={TirdImage}
            url="https://encuadrado.com/p/vianny-macero/"
            firsText="Formulario"
            secodText="(Sin Videollamada)"
          />
        </div>
      </div>
    </>
  );
}

export default TypeAdvisory;
