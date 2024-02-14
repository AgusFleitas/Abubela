import "boxicons";

import outside from "../../assets/outside.jpg";
import plates from "../../assets/plates.jpg";
import business from "../../assets/business.jpg";
import contact from "../../assets/contact.jpg";

import style from "./Home.module.css";

const Home = () => {
  return (
    <div className={style.homeContainer}>
      <div className={style.outImgContainer}>
        <img
          src={outside}
          alt='outside view of A Bubela'
          className={style.outImg}
        />
      </div>
      <div className={style.mainTextContainer}>
        <h3 className={style.mainTitle}>
          ¿Vienes a pasar un buen rato con nosotros?
        </h3>
        <p className={style.mainText}>
          Ya sea que estés buscando un lugar para tomar un descanso durante tu
          jornada o para disfrutar de una tarde llena de sabores, estamos aquí
          para hacer de tu experiencia una verdadera delicia.
        </p>
        <p className={style.mainText}>
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
          <a href='#' className={style.serviceLink}>
            <p className={style.serviceTitle}>PLATOS</p>
            <img
              src={plates}
              alt='plates preview'
              className={style.serviceImg}
            />
            <div className={style.servicesHover}>
              <h4 className={style.hoverTitle}>NUESTROS PLATOS</h4>
              <p className={style.hoverText}>
                Tenemos a tu disposición nuestro menú completo para que puedas
                elegir tu plato favorito y ver su precio.
              </p>
            </div>
          </a>
        </div>
        <div className={style.services}>
          <a href='#' className={style.serviceLink}>
            <p className={style.serviceTitle}>EMPRESAS</p>
            <img
              src={business}
              alt='business preview'
              className={style.serviceImg}
            />
            <div className={style.servicesHover}>
              <h4 className={style.hoverTitle}>CENA PARA EMPRESAS O EVENTOS</h4>
              <p className={style.hoverText}>
                ¿Necesitas organizar una cena para tu empresa? Puedes realizar
                una reserva y consultar sobre la comida. ¡Tenemos menú completo!
              </p>
            </div>
          </a>
        </div>
        <div className={style.services}>
          <a href='#' className={style.serviceLink}>
            <p className={style.serviceTitle}>CONTACTO</p>
            <img
              src={contact}
              alt='contact preview'
              className={style.serviceImg}
            />
            <div className={style.servicesHover}>
              <h4 className={style.hoverTitle}>CONTACTA CON NOSOTROS</h4>
              <p className={style.hoverText}>
                Puedes enviarnos un mensaje por WhatsApp, llamar a nuestro
                teléfono o enviarnos un mail a través de nuestro formulario.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
