import Logo from "./Logo.tsx";
import PageMenu from "./PageMenu.tsx";

function Header() {
  return (
    <div className="navbar-fixed">

    <nav className="white ">
      <div className="nav-content">
        <div className="container">

        <Logo/>
        <PageMenu/>

        </div>
      </div>
    </nav>
      
    </div>
  );
}

export default Header;
