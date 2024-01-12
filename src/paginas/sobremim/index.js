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
  Olá, tudo bem? Eu sou um programador FullStack e gostaria de compartilhar um pouco da minha jornada na área da tecnologia.
</p>

<p className={styles.paragrafo}>
  Meus estudos incluem:
  <br />
  - Graduação em Psicologia pela Universidade Brasil (semestres 9 - 10);
  <br />
  - Graduação em Análise e Desenvolvimento de Sistemas pela Estácio (semestres 1 - 5);
  <br />
  - Curso Técnico em Desenvolvimento de Sistemas pelo SENAC (semestres 2 - 3);
  <br />
  - Mais de 30 cursos na área de Tecnologia.
</p>

<p className={styles.paragrafo}>
  Minha paixão pela programação começou na infância, quando criava jogos simples usando uma ferramenta chamada "Game Maker". Mesmo sem compreender completamente os conceitos e técnicas da programação naquela época, desenvolvia jogos por puro prazer.
</p>

<p className={styles.paragrafo}>
  Anos depois, durante minha graduação em Psicologia na Universidade Brasil, surgiu uma oportunidade única. Enquanto estagiava no Centro de Referência de Assistência Social (CRAS), propus a criação de um software para otimizar a elaboração de relatórios. Foi nesse momento que minha jornada na programação de sistemas teve início.
</p>

<p className={styles.paragrafo}>
  Explorando as diversas linguagens de programação no mercado, optei por iniciar meu primeiro projeto em VBA. Mesmo com pouco conhecimento em programação, consegui entregar o projeto com sucesso.
</p>

<p className={styles.paragrafo}>
  Após essa experiência, decidi aprimorar meus conhecimentos e ingressei nos cursos do professor Gustavo Guanabara, nos quais fui apresentado a linguagens como Java, Javascript, Python e SQL. Escolhi me especializar em Javascript, explorando suas possibilidades e desafios.
</p>

<p className={styles.paragrafo}>
  Dediquei-me a diversos cursos de qualidade reconhecida pela comunidade, como os excelentes cursos da Alura, Danki Code, o curso técnico em desenvolvimento de sistemas pelo SENAC e, por fim, a recente graduação em Análise e Desenvolvimento de Sistemas pela Estácio.
</p>

<p className={styles.paragrafo}>
  Ao longo da minha trajetória, concluí diversos projetos notáveis, incluindo o "Cartão Azul", um sistema que simplifica a emissão de documentos para pessoas com TEA, o "SisAssist", sendo um sistema de gerenciamento de atendimentos socioassistenciais e por fim o "Commandas", um projeto para auxiliar serviços em restaurantes. Mais detalhes sobre esses projetos podem ser encontrados na aba de projetos.
</p>

<p className={styles.paragrafo}>
  Além disso, compartilho regularmente meus materiais de estudo e projetos nas redes sociais, estimulando discussões construtivas e alternativas inovadoras.
</p>

<p className={styles.paragrafo}>
  Atualmente, atuo como freelancer, fornecendo soluções tecnológicas personalizadas para os clientes. Estou constantemente em busca de aprimoramento e aprendizado, buscando levar cada projeto a um novo patamar.
</p>

<p className={styles.paragrafo}>
  Se quiser trocar ideias, esclarecer dúvidas ou saber mais sobre minhas experiências e trabalhos, estou sempre disponível em minhas redes sociais, que você pode encontrar no topo do site.
</p>

<p className={styles.paragrafo}>
  Agradeço pela atenção e até breve!
</p>

    
        </PostModelo>
    );
    
}