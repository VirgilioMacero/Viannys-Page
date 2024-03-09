import ViannySmilingOnCouch from "../assets/img/ViannySmillingOnCouch.webp";
import Button from "../components/Button";
// import Divider from "../components/Divider";
export default function FAQButton() {
  function redirect(url: string) {
    window.location.href = url;
  }

  return (
    <>
      {/* <Divider id="" mb="100px" mt="100px" /> */}
      <div className="grid grid-cols-2 gap-4 max-[700px]:grid-cols-1 max-[700px]:mt-20">
        <div className="grid grid-cols-1 align-middle self-center gap-6 max-[700px]:col-row-1 text-center">
          <div>
            <h1
              className="text-[50px] text-center"
              style={{ fontFamily: "Raleway" }}
            >
              PREGUNTAS<br></br> FRECUENTES
            </h1>
          </div>
          <div className="justify-center h-16 align-middle">
            <Button
              onClick={() => redirect("#FAQS")}
              name="Click aquí"
              className="focus:bg-white hover:bg-gray-700 hover:text-white"
            />
          </div>
        </div>
        <div className="max-[700px]:p-20">
          <img src={ViannySmilingOnCouch} alt="Presencial Modality" />
        </div>
      </div>
    </>
  );
}
