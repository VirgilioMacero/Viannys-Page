import Logo from "./Logo.tsx";
import PageMenu from "./PageMenu.tsx";
import { useEffect } from "react";

function Header() {
  useEffect(() => {
    // @ts-ignore
    M.AutoInit();
  }, []);

  var elem = document.querySelector(".sidenav");
  // @ts-ignore
  var instance = M.Sidenav.init(elem);

  return (
    <>
      <div className="navbar-fixed">
        <nav className="white ">
          <div className="nav-wrapper">
            <div className="container">
              <a
                href="#"
                data-target="mobile"
                className=" right sidenav-trigger"
              >
                <i className="material-icons" style={{ color: "black" }}>
                  menu
                </i>
              </a>
              <Logo />
              <PageMenu />
            </div>
          </div>
        </nav>
      </div>
      <ul className="sidenav" id="mobile">
        <li>
          <a href="#Inicio">Inicio</a>
        </li>
        <li>
          <a href="#about">Acerca de</a>
        </li>
        <li>
          <a href="#Servicios">Servicios</a>
        </li>
        <li>
          <a href="#Asesorias">Asesorias</a>
        </li>

        <li>
          <a href="#contacto">Contacto</a>
        </li>
      </ul>
    </>
  );
}

export default Header;
