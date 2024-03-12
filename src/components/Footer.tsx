export default function Footer() {
  return (
    <div className="flex flex-row justify-between mt-[100px] py-6 px-4">
      <p style={{ fontFamily: "Raleway" }}>
        © Nut. Vianny Macero | Todos los derechos reservados.
      </p>
      <p style={{ fontFamily: "Raleway" }}>
        Página hecha por:{" "}
        <a
          target="__blank"
          href="https://www.cyberdoit.com"
          className="hover:underline"
        >
          Cyber Do It
        </a>
        <br />
        <p style={{ fontStyle: "italic" }}>
          Programador :{" "}
          <a
            href="https://www.linkedin.com/in/virgilio-macero/"
            target="__blank"
            className="hover:underline"
          >
            Virgilio Macero
          </a>
        </p>
      </p>
    </div>
  );
}
