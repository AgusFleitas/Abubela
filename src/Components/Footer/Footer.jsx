import style from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={style.footerContainer}>
            <span className={style.copyright}>© A Bubela- Snack Bar. Todos los derechos reservados.</span>
        </div>
    )
}

export default Footer;