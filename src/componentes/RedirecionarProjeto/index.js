import BotaoPrincipal from "componentes/BotaoPrincipal";
import styles from "./RedirecionarProjeto.module.css";

export default function RedirecionarProjeto({ codigo, site, video }) {
  const redirecionarParaSite = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className={styles.containerBotoes}>
      {codigo !== "" ? (
        <BotaoPrincipal onClick={() => redirecionarParaSite(site)}>
          Ver o projeto
        </BotaoPrincipal>
      ) : (
        ""
      )}

      {site !== "" ? (
        <BotaoPrincipal onClick={() => redirecionarParaSite(codigo)}>
          Abrir repositório
        </BotaoPrincipal>
      ) : (
        ""
      )}

      {video !== "" ? (
        <BotaoPrincipal onClick={() => redirecionarParaSite(video)}>
          Ver vídeo
        </BotaoPrincipal>
      ) : (
        ""
      )}
    </div>
  );
}
