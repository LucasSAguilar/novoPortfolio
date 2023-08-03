import styles from "./Banner.module.css"
import circuloColorido from "assets/circulo_colorido.png"
import minhaFoto from "assets/minha_foto.png"
import IconeRedeSocial from "componentes/IconeRedeSocial"

export default function Banner (){
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>Olá, mundo!</h1>
                <p className={styles.paragrafo}>Boas vindas ao meu espaço pessoal! Eu sou Lucas Aguilar, desenvolvedor front-end. Aqui apresento meus trabalhos e compartilho vários conhecimentos, espero que aprenda algo novo</p>
     
        <div className={styles.containerIcones}>
            <IconeRedeSocial  imagem={"/assets/icons/github.png"} link={"https://github.com/LucasSAguilar"}/>
            <IconeRedeSocial  imagem={"/assets/icons/linkedin.png"} link={"https://www.linkedin.com/in/lucasaguilardesenvolvedor/"}/>
            <IconeRedeSocial  imagem={"/assets/icons/instagram.png"} link={"https://www.instagram.com/lucass_aguillar/"}/>
            <IconeRedeSocial  imagem={"/assets/icons/email.png"} link={"email"}/>
        </div>
            </div>


            <div className={styles.imagens}>
                <img 
                    className={styles.circuloColorido} 
                    src={circuloColorido} 
                    aria-hidden={true}/>
                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto do Lucas"
                    />
            </div>
        </div>
    )
}