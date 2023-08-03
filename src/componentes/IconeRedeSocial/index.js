import styles from "./IconeRedeSocial.module.css"


    
    const redirecionarParaRS = (url)=>{
        if (url === "email") {
            window.location.href = "mailto:lcsaguilar01@gmail.com";
        } else {
        window.open(url, "_blank")}
    }

 


export default function IconeRedeSocial ({imagem, link}){
    return (
        <img className={styles.icone} src={imagem} onClick={() => redirecionarParaRS(link)}/>
    )
}