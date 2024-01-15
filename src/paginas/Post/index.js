import { useParams } from "react-router-dom"
import Posts from "json/posts.json";
import PostModelo from "componentes/PostModelo";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import "./Post.css"
import NaoEncontrada from "paginas/NaoEncontrada";
import RedirecionarProjeto from "componentes/RedirecionarProjeto";

export default function Post(){

    const parametros = useParams()

    const post = Posts.find((Posts) => {
        return Posts.id === Number(parametros.id)
    })

    if (!post){
        return <NaoEncontrada/>
    }

    return (
        <PostModelo
            fotoCapa={`/assets/posts/${post.id}/capa.png`}
            titulo={post.titulo}
        >
            <div className="post-markdown-container">
            <ReactMarkdown>
                {post.texto}
            </ReactMarkdown>
            </div>
            <RedirecionarProjeto codigo={post.codigo} site={post.pagina} video={post.video}/>
        </PostModelo>
    )
}