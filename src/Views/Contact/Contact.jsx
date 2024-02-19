import inside from "../..//assets/inside.jpg";

import style from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={style.contactContainer}>
      <div className={style.imageContainer}>
        <img
          className={style.insideImg}
          src={inside}
          alt='Inside of A Bubela'
        />
      </div>
      <div className={style.rightContainer}>
        <h1 className={style.rightTitle}>Contáctanos</h1>
        <div className={style.infoContainer}>
          <div className={style.infoSubContainer}>
            <span className={style.infoTitle}>
              <box-icon name='time' color='#f19409' size='md'></box-icon> NUESTRO HORARIO:
            </span>
            <span className={style.infoText}>Lun a Jue de 09:00 am a 00:00 am.</span>
            <span className={style.infoText}>Vie y Sab de 10:00 am a 01:00 am.</span>
            <span className={style.infoText}>Domingos CERRADO.</span>
          </div>
          <div className={style.infoSubContainer}>
            <span className={style.infoTitle}>
              <box-icon name='map' color='#f19409' size='md'></box-icon> DIRECCION:
            </span>
            <span className={style.infoText}>
              Rúa Santo Domingo, 15, 32003 Ourense.
            </span>
          </div>
          <div className={style.infoSubContainer}>
            <span className={style.infoTitle}>
              <box-icon name='phone' color='#f19409' size='md'></box-icon> TELEFONO:
            </span>
            <span className={style.infoText}>+34 659 52 84 36</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
