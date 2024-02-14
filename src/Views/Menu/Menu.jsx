import { plates, sandwiches } from "../../Helpers/Plates";

import style from "./Menu.module.css";

const Menu = () => {
  return (
    <div className={style.menuContainer}>
      <h1>Nuestro menú ¡Encuentra tu plato favorito!</h1>
      <div className={style.menu}>
        <h4>MENU</h4>
        {plates.map((plate) => (
          <div key={plate.name}>
            <p>{plate.name}</p>
            <p>{plate.price}€</p>
          </div>
        ))}
      </div>
      <div className={style.menu}>
        <h4>MENU</h4>
        {sandwiches.map((sandwich) => (
            <div key={sandwich.name}>
                <span>{sandwich.name}</span>
                <p>{sandwich.description}</p>
                <p>{sandwich.price}€</p>
            </div>
        ))}
      </div>
      <div className={style.rightcolumn}>
        <div className={style.desserts}></div>
        <div>
          <h3>¿Buscas el menú para empresas?</h3>
          <p>
            Contáctanos y con gusto te brindaremos información respecto a los
            menús disponibles para tu evento.
          </p>
          <p>
            <span>Teléfono: </span> 659 52 84 36
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
