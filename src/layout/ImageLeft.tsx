import Divider from "../components/Divider";
import ViannyLookingLaptop from "../assets/img/ViannyLookingLaptop.webp";

export default function ImageLeft() {
  return (
    <>
      <Divider id="OnlineModality" mb="100px" mt="100px" />
      <div className="grid grid-cols-2">
        <div>
          <img src={ViannyLookingLaptop} alt="Online Modality" />
        </div>
        <div>
          <div>
            <h1 className="text-[60px]" style={{ fontFamily: "Raleway" }}>
              MODALIDAD ONLINE
            </h1>
            <p></p>
          </div>
        </div>
      </div>
    </>
  );
}
