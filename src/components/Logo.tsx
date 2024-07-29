import logo from "../assets/img/logo-nutri-vmacero-simple.png";

function Logo({ className }: { className?: string }) {
  return (
    <a href="#" className="nav-logo logo left">
      <img
        src={logo}
        loading="lazy"
        alt="logo"
        className={`h-[63px] w-[63px] max-[601px]:h-[56px] max-[601px]:w-[56px] ${className}`}
      ></img>

      {/* NUTRICIÓN 
      DEPORTE 
      WELLNESS */}
    </a>
  );
}

export default Logo;
