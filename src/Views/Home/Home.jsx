import outside from "../../assets/outside.jpg";
import plates from "../../assets/plates.jpg";
import business from "../../assets/business.jpg";
import contact from "../../assets/contact.jpg";

import "boxicons";
import style from "./Home.module.css";

const Home = () => {
  return (
    <div className={style.homeContainer}>
      <div className={style.outImgContainer}>
        <img src={outside} alt='outside view of A Bubela' />
      </div>
      <div className={style.mainText}>
        <h3>¿Vienes a pasar un buen rato con nosotros?</h3>
        <p>
          Ya sea que estés buscando un lugar para tomar un descanso durante tu
          jornada o para disfrutar de una tarde llena de sabores, estamos aquí
          para hacer de tu experiencia una verdadera delicia.
        </p>
        <br></br>
        <p>
          En A Bubela fusionamos lo mejor de dos mundos: la calidez y aroma del
          café recién hecho, y la frescura y diversidad de los refrescos
          acompañados de deliciosos pinchos.
        </p>
        <span className={style.greeting}>
          ¡Te esperamos con los brazos abiertos!
        </span>
        <br></br>
        <span className={style.location}>
          <box-icon type='solid' name='map' color='white'></box-icon> A Bubela -
          SnackBar - Rúa Santo Domingo, 15, 32003 Ourense.
        </span>
        <br></br>
        <span className={style.location}>
          <box-icon type='solid' name='phone' color='white'></box-icon>{" "}
          Teléfono: 659 52 84 36
        </span>
      </div>
      <div className={style.bottomImages}>
        <div className={style.services}>
          <a href='#'>
            <p>PLATOS</p>
            <img src={plates} alt='plates preview' />
          </a>
        </div>
        <div className={style.services}>
          <a href='#'>
            <p>EMPRESAS</p>
            <img src={business} alt='business preview' />
          </a>
        </div>
        <div className={style.services}>
          <a href='#'>
            <p>CONTACTO</p>
            <img src={contact} alt='contact preview' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
