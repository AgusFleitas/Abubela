import { plates, sandwiches, desserts } from "../../Helpers/Plates";

import style from "./Menu.module.css";

const Menu = () => {
  return (
    <div className={style.menuContainer}>
      <h1 className={style.main}>Nuestro menú ¡Encuentra tu plato favorito!</h1>
      <div className={style.mainContainer}>
        <div className={style.menu}>
          <h4 className={style.menuTitle}>MENU</h4>
          {plates.map((plate) => (
            <div className={style.plateContainer} key={plate.name}>
              <p className={style.menuText}>{plate.name}</p>
              <p className={style.menuText}>{plate.price}€</p>
            </div>
          ))}
        </div>
        <div className={style.menu}>
          <h4 className={style.menuTitle}>MENU</h4>
          {sandwiches.map((sandwich) => (
            <div className={style.plateContainer} key={sandwich.name}>
              <span className={style.sandwichTitle}>{sandwich.name}</span>
              <p className={style.menuText}>{sandwich.description}</p>
              <p className={style.menuText}>{sandwich.price}€</p>
            </div>
          ))}
        </div>
        <div className={style.rightcolumn}>
          <div className={style.desserts}>
          {desserts.map((dessert) => (
            <div className={style.dessertContainer} key={dessert.name}>
              <p className={style.menuText}>{dessert.name}</p>
              <p className={style.menuText}>{dessert.price}€</p>
            </div>
          ))}
          </div>
          <div>
            <h3 className={style.businessTitle}>¿Buscas el menú para empresas?</h3>
            <p className={style.businessText}>
              Contáctanos y con gusto te brindaremos información respecto a los
              menús disponibles para tu evento.
            </p>
            <p className={style.businessText}>
              <span className={style.businessPhone}>Teléfono: </span> 659 52 84 36
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
