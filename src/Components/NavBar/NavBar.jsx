import style from "./NavBar.module.css";

import logo from "../../assets/logo.png";

const NavBar = () => {
  return (
    <div className={style.navbarContainer}>
      <div className={style.imageContainer}>
        <a href="/">
          <img src={logo} alt='logo abubela' />
        </a>
      </div>
      <nav className={style.navLinks}>
        <a href='/'>INICIO</a>
        <a href='/menu'>NUESTRA CARTA</a>
        <a href='/booking'>RESERVAS</a>
        <a href='/about'>NOSOTROS</a>
        <a href='/contact'>CONTACTO</a>
      </nav>
    </div>
  );
};

export default NavBar;
