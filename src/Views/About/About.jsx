import family from "../../assets/family.png";
import outside2 from "../../assets/outside2.jpg";

import style from "./About.module.css";

const About = () => {
  return (
    <div className={style.aboutContainer}>
      <div className={style.upperContainer}>
        <div className={style.imageContainer}>
          <img
            className={style.upperImg}
            src={family}
            alt='Los propietarios de A Bubela y su familia'
          />
        </div>
        <div className={style.upperTextContainer}>
          <h2 className={style.upperTitle}>¡Bienvenidos a Abubela!</h2>
          <p className={style.upperText}>
            Somos Candy Guede y Eulogio Gómez, los orgullosos propietarios de
            este encantador local en la calle Santo Domingo de Ourense. Con
            décadas de experiencia en el mundo de la hostelería, hemos visto
            cómo este espacio ha sido hogar de diversos negocios a lo largo de
            los años, cada uno dejando su huella en la comunidad. Sin embargo,
            tras el cierre de la tapería Bekas, nuestros hijos Ana, Luci y
            Javier tuvieron una brillante idea: ¿por qué no abrir algo nosotros
            mismos?
          </p>
        </div>
      </div>
      <div className={style.lowerContainer}>
        <p className={style.lowerText}>
          Y así, de la noche a la mañana, nació A Bubela, un gastrobar concebido
          como un espacio donde disfrutar de buena comida y mejor compañía desde
          las nueve de la mañana hasta la una de la madrugada. Nos
          especializamos en desayunos deliciosos y platos para compartir que
          harán las delicias de todos los paladares. Estamos emocionados de
          abrir nuestras puertas y compartir nuestra pasión por la buena comida
          con vosotros. A Bubela es más que un simple local; es un lugar donde
          la comida se convierte en experiencias memorables y donde cada cliente
          es recibido con una sonrisa.
        </p>
        <div className={style.imageLowContainer}>
          <img
            className={style.lowerImg}
            src={outside2}
            alt='Vista desde fuera de A Bubela'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
