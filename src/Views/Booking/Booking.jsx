import { menuOne, menuTwo } from "../../Helpers/Business";

import style from "./Booking.module.css";

const Booking = () => {
  return (
    <div className={style.bookingContainer}>
      <h1 className={style.bookingTitle}>Reserva con nosotros</h1>
      <span className={style.bookingSubTitle}>
        Disponemos de 2 tipos de menú para que organices la cena de tu empresa o evento.
      </span>
      <span className={style.bookingSubTitle}>
        Te dejamos todos los detalles a continuación:
      </span>
      <div className={style.menusContainer}>
        <div className={style.menuOne}>
          <h3 className={style.menuNumber}>MENU UNO</h3>
          <div className={style.starter}>
            <span className={style.menuTitle}>ENTRANTES</span>
            {menuOne.starter.map((starter) => (
              <div key={starter.name}>
                <span className={style.plateName}>{starter.name}</span>
                <p>{starter.description}</p>
              </div>
            ))}
          </div>
          <div className={style.main}>
            <span className={style.menuTitle}>PLATO PRINCIPAL</span>
            <div>
              <span className={style.plateName}>{menuOne.main.name}</span>
              <p>{menuOne.main.description}</p>
            </div>
          </div>
          <div className={style.dessert}>
            <span className={style.menuTitle}>POSTRES</span>
            {menuOne.dessert.map((dessert) => (
              <div key={dessert.name}>
                <span className={style.plateName}>{dessert.name}</span>
                <p>{dessert.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={style.menuTwo}>
          <h3 className={style.menuNumber}>MENU DOS</h3>
          <div className={style.starter}>
            <span className={style.menuTitle}>ENTRANTES</span>
            {menuTwo.starter.map((starter) => (
              <div key={starter.name}>
                <span className={style.plateName}>{starter.name}</span>
                <p>{starter.description}</p>
              </div>
            ))}
          </div>
          <div className={style.main}>
            <span className={style.menuTitle}>PLATO PRINCIPAL</span>
            <div>
              <span className={style.plateName}>{menuTwo.main.name}</span>
              <p>{menuTwo.main.description}</p>
            </div>
          </div>
          <div className={style.dessert}>
            <span className={style.menuTitle}>POSTRES</span>
            {menuTwo.dessert.map((dessert) => (
              <div key={dessert.name}>
                <span className={style.plateName}>{dessert.name}</span>
                <p>{dessert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <span className={style.availability}>* CONSULTAR PRECIOS Y DISPONIBILIDAD A TRAVÉS DE WHATSAPP O CORREO ELECTRÓNICO.</span>
    </div>
  );
};

export default Booking;
