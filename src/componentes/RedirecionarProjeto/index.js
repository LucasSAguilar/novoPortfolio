import BotaoPrincipal from "componentes/BotaoPrincipal"
import styles from "./RedirecionarProjeto.module.css"

export default function RedirecionarProjeto ({codigo, site}){
    
    const redirecionarParaSite = (url)=>{
        window.open(url, "_blank")
    }

 

    return (
        <div className={codigo === "" ? styles.containerBotoesHidden : styles.containerBotoes}>
        {codigo !== "" && (
            <>
                <BotaoPrincipal onClick={() => redirecionarParaSite(site)}>
                    Ver o projeto
                </BotaoPrincipal>
                <BotaoPrincipal onClick={() => redirecionarParaSite(codigo)}>
                    Abrir repositório
                </BotaoPrincipal>
            </>
        )}
    </div>
    )
}