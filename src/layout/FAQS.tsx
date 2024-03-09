import Divider from "../components/Divider";
import FAQ from "../components/FAQ";
import Button from "../components/Button";

export default function FAQS() {
  function redirect(url: string) {
    window.location.href = url;
  }
  return (
    <>
      <Divider id="FAQS" mb="100px" mt="100px" />

      <div className=" grid grid-cols-3 gap-4 mx-8  max-[1100px]:grid-cols-2 max-[670px]:grid-cols-1 p-2">
        <FAQ
          name="¿Puedo agendar varios controles
en un mismo momento?"
          description="Por supuesto! en mi agenda esta la opción de agendar 1 ingreso + 2 controles de seguimiento."
        />
        <FAQ
          name="¿Cuál es el horario de atención por WhatsApp? "
          description="De lunes a viernes desde las 8.00 hrs hasta las 19.30 hrs (hora Chile), aplican excepciones de horario para pacientes internacionales. "
        />
        <FAQ
          name="¿Puedo atenderme contigo siendo vegano?"
          description="Si y no, puedo ayudarte a mejorar tu alimentación, pero mi  recomendación es que  los pacientes veganos debiesen asesorarse con profesionales que también sean veganos."
        />
        <FAQ
          name="¿Sólo atiendes deportistas? "
          description="No, atiendo personas que quieran mejorar su calidad de vida, independiente de su actividad física."
        />
        <FAQ
          name="Tipo de pacientes que NO
atiendo"
          description="APLV, Celiacos, pacientes pediatricos, sin embargo puedo derivarte con algún colega que puede ayudarte. "
        />
        <FAQ
          name="¿Tengo que tomarme medidas/peso?"
          description="Sólo si lo deseas, de lo contrario no es necesario tomarte medidas ni pesarte para mejorar hábitos y estilo de vida.  "
        />
      </div>
      <div className="w-full text-center mt-4">
        <Button
          name="¿TIENES OTRA PREGUNTA?"
          className=""
          onClick={() => redirect("#contacto")}
        />
      </div>
    </>
  );
}
