import { plates, sandwiches, desserts } from "../../Helpers/Plates";

import style from "./Menu.module.css";

const Menu = () => {
  return (
    <div className={style.menuContainer}>
      <h1 className={style.mainTitle}>
        Nuestro menú ¡Encuentra tu plato favorito!
      </h1>
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
            <div className={style.sandwichContainer} key={sandwich.name}>
              <div className={style.sandwichDetail}>
                <span className={style.sandwichTitle}>{sandwich.name}</span>
                <p className={style.sandwichPrice}>{sandwich.price}€</p>
              </div>
              <p className={style.sandwichDescription}>
                {sandwich.description}
              </p>
            </div>
          ))}
        </div>
        <div className={style.rightcolumn}>
          <div className={style.desserts}>
            <h4 className={style.dessertTitle}>POSTRES</h4>
            {desserts.map((dessert) => (
              <div className={style.dessertContainer} key={dessert.name}>
                <p className={style.menuText}>{dessert.name}</p>
                <p className={style.menuText}>{dessert.price}€</p>
              </div>
            ))}
          </div>
          <div className={style.business}>
            <h3 className={style.businessTitle}>
              ¿Buscas el menú para empresas?
            </h3>
            <p className={style.businessText}>
              Contáctanos y con gusto te brindaremos información respecto a los
              menús disponibles para tu evento.
            </p>
            <p className={style.businessText}>
              <span className={style.businessPhone}>Teléfono: </span> 659 52 84
              36
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
