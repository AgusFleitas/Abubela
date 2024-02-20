import style from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={style.contactContainer}>
      <div className={style.rightContainer}>
        <h1 className={style.rightTitle}>Contáctanos</h1>
        <div className={style.infoContainer}>
          <div className={style.infoSubContainer}>
            <span className={style.infoTitle}>
              <box-icon name='time' color='#f19409' size='md'></box-icon>
              NUESTRO HORARIO:
            </span>
            <span className={style.infoText}>
              Lun a Jue de 09:00 am a 00:00 am.
            </span>
            <span className={style.infoText}>
              Vie y Sab de 10:00 am a 01:00 am.
            </span>
            <span className={style.infoText}>Domingos CERRADO.</span>
          </div>
          <div className={style.infoSubContainer}>
            <span className={style.infoTitle}>
              <box-icon name='map' color='#f19409' size='md'></box-icon>
              DIRECCIÓN:
            </span>
            <span className={style.infoText}>
              Rúa Santo Domingo, 15, 32003 Ourense.
            </span>
          </div>
          <div className={style.infoSubContainer}>
            <span className={style.infoTitle}>
              <box-icon name='phone' color='#f19409' size='md'></box-icon>
              TELÉFONO:
            </span>
            <span className={style.infoText}>+34 659 52 84 36</span>
          </div>
        </div>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.205449936247!2d-7.8659346234979735!3d42.33814293648545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2fffbc5f88ecf5%3A0xd964bf1af4175b1b!2sA%20Bubela%20Snack%20Bar!5e0!3m2!1ses!2ses!4v1708370838324!5m2!1ses!2ses'
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
