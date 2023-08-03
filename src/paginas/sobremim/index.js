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
    
            <img src={fotoSobreMim} alt="Foto do Lucas olhando para o lado" className={styles.fotoSobreMim} />
    
            <p className={styles.paragrafo}>
                Olá, tudo bem? Eu sou programador de Front-end e te convido a conhecer um pouco da minha história na área da tecnologia.
            </p>
    
            <p className={styles.paragrafo}>
                Eu sempre tive interesse por programação desde a infância, quando eu criava jogos simples usando uma ferramenta chamada "Game Maker". Naquela época, eu não sabia muito sobre os conceitos e as técnicas da programação, então produzia diversos joguinhos apenas por diversão.
            </p>
    
            <p className={styles.paragrafo}>
                Anos depois, eu iniciei minha graduação em psicologia pela Universidade Brasil e fiz um estágio no Centro de Referência de Assistência Social (CRAS), onde surgiu uma oportunidade única. Ao ser questionado sobre otimizar a criação de relatórios, propus o desenvolvimento de um software que simplificasse o processo. Foi nesse ponto que minha jornada na programação de sistemas começou.
            </p>
    
            <p className={styles.paragrafo}>
                Verifiquei as variadas linguagens de programação existentes no mercado, e após um tempo iniciei a produção desse sistema em VBA.
            </p>
    
            <p className={styles.paragrafo}>
                Após a entrega, decidi iniciar os incríveis cursos do professor Gustavo Guanabara, cursos esses que me apresentaram linguagens como Java, Javascript, Python, SQL e afins. Entre esses, escolhi me especializar em Javascript, explorando suas possibilidades e desafios.
            </p>
    
            <p className={styles.paragrafo}>
                Eu me dediquei a vários cursos de qualidade reconhecida pela comunidade, dos quais ainda participo, como os excelentes cursos da Alura, Danki Code e o curso técnico em desenvolvimento de sistemas pelo SENAC.
            </p>
    
            <p className={styles.paragrafo}>
                Minha busca por aprendizado contínuo levou-me a prestigiosos cursos, incluindo aqueles oferecidos pela Alura, Danki Code e meu curso técnico em desenvolvimento de sistemas no SENAC. Essa formação ampla me permitiu explorar tanto o front-end quanto o full-stack.
            </p>
    
            <p className={styles.paragrafo}>
                Ao longo da minha trajetória, já concluí diversos projetos notáveis, entre eles destaco o "Cartão Azul", um sistema que simplifica a emissão de documentos para pessoas com TEA. Além disso, compartilho regularmente meus materiais de estudo e projetos nas redes sociais, estimulando discussões construtivas e alternativas inovadoras.
            </p>
    
            <p className={styles.paragrafo}>
                No momento, atuo como freelancer, fornecendo soluções tecnológicas sob medida para diversos clientes. Estou constantemente em busca de aprimoramento e aprendizado, buscando levar cada projeto a um novo patamar.
            </p>
    
            <p className={styles.paragrafo}>
                Caso queira trocar ideias, esclarecer dúvidas ou saber mais sobre minhas experiências e trabalhos, estou sempre disponível em minhas redes sociais, que você pode encontrar no topo do site.
            </p>
    
            <p className={styles.paragrafo}>
                Agradeço pela atenção e até breve!
            </p>
    
        </PostModelo>
    );
    
}