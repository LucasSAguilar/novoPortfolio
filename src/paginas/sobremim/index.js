import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png"
import fotoSobreMim from "assets/sobre_mim_foto.png"
import styles from "./SobreMim.module.css"



export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Lucas!
            </h3>

            <img src={fotoSobreMim} alt="Foto do lucas olhando para o lado" className={styles.fotoSobreMim} />

            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou programador de Front-end e faço alguns projetos como freelancer.
            </p>

            <p className={styles.paragrafo}>
                Eu sempre tive interesse por programação desde a infância, quando eu criava jogos simples usando uma ferramenta chamada "Game Maker". Naquela época, eu não sabia muito sobre os conceitos e as técnicas da programação.
            </p>

            <p className={styles.paragrafo}>
                Anos depois, eu cursei psicologia e fiz um estágio no Centro de Referência de Assistência Social (CRAS), onde me pediram para desenvolver um software que agilizasse a produção de relatórios. Foi então que eu descobri minha verdadeira paixão pelo desenvolvimento de sistemas, que me acompanha até hoje.
            </p>

            <p className={styles.paragrafo}>
                Eu me dediquei a vários cursos de qualidade reconhecida pela comunidade, dos quais ainda participo, como os excelentes cursos da Alura, Danki Code e o curso técnico em desenvolvimento de sistemas pelo SENAC.
            </p>

            <p className={styles.paragrafo}>
                Nesses cursos, explorei as diversas áreas do desenvolvimento de sistemas, nas quais, apesar de me especializar em front-end, também atuo como full stack.
            </p>

            <p className={styles.paragrafo}>
                Desde o início dos meus estudos, já entreguei alguns projetos, dos quais destaco o “Cartão Azul”, um sistema que facilita a emissão de um documento para pessoas com TEA. Além disso, publico frequentemente sobre alguns materiais de estudo e trabalhos nas minhas redes sociais.
            </p>

        </PostModelo>
    )
}