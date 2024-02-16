import family from "../../assets/family.png";

import style from "./About.module.css";

const About = () => {
  return (
    <div className={style.aboutContainer}>
      <div className={style.imageContainer}>
        <img src={family} alt='Los propietarios de A Bubela y su familia' />
      </div>
      <div className={style.upperContainer}>
        <h2 className={style.upperTitle}>¡Bienvenidos a Abubela!</h2>
        <p className={style.upperText}>
          Somos Candy Guede y Eulogio Gómez, los orgullosos propietarios de este
          encantador local en la calle Santo Domingo de Ourense. Con décadas de
          experiencia en el mundo de la hostelería, hemos visto cómo este
          espacio ha sido hogar de diversos negocios a lo largo de los años,
          cada uno dejando su huella en la comunidad. Sin embargo, tras el
          cierre de la tapería Bekas este verano, nuestros hijos Ana, Luci y
          Javier tuvieron una brillante idea: ¿por qué no abrir algo nosotros
          mismos?
        </p>
      </div>
      <div className={style.lowerContainer}>
        <p className={style.lowerText}>
          Y así, de la noche a la mañana, nació A Bubela, un gastrobar concebido
          como un espacio donde disfrutar de buena comida y mejor compañía desde
          las nueve de la mañana hasta la una de la madrugada. Nos
          especializamos en desayunos deliciosos y platos para compartir que
          harán las delicias de todos los paladares. En nuestra carta,
          encontrarás favoritos que estamos seguros se convertirán en
          imprescindibles, como los langostinos rebozados en kikos con salsa al
          curry o la tosta de pulpo con parmentier y aceite de pimentón de La
          Vera. También ofrecemos baos y croquetas elaboradas con ingredientes
          frescos del día, así como ensaladas gourmet para satisfacer cualquier
          antojo.
        </p>
        <p className={style.lowerText}>
          Estamos emocionados de abrir nuestras puertas y compartir nuestra
          pasión por la buena comida con vosotros. A Bubela es más que un simple
          local; es un lugar donde la comida se convierte en experiencias
          memorables y donde cada cliente es recibido con una sonrisa.
        </p>
      </div>
    </div>
  );
};

export default About;
