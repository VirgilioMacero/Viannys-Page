function PageMenu() {
  return (
    <>
      <ul id="nav-mobile " className="right PageMenu hide-on-med-and-down">
        <li>
          <a href="#Inicio">Inicio</a>
        </li>
        <li>
          <a href="#about">Conóceme</a>
        </li>
        {/* <li>
          <a href="#Servicios">Servicios</a>
        </li> */}
        <li>
          <a href="#Asesorias">Asesorias</a>
        </li>
        <li>
          <a href="#Address">Ubicación</a>
        </li>

        <li>
          <a href="#contacto">Contacto</a>
        </li>
      </ul>
    </>
  );
}

export default PageMenu;
