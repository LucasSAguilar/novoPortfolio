import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/inicio";
import SobreMim from "./paginas/sobremim";
import Menu from "./componentes/Menu";
import Rodape from "./componentes/Rodape";
import PaginaPadrao from "./componentes/PaginaPadrao"
import Post from "paginas/Post";
import NaoEncontrada from "paginas/NaoEncontrada";
console.log(window.location);

function AppRoutes() {
  return (
    <BrowserRouter>
    <Menu/>


    <Routes>
    
      <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
      </Route>

      <Route path="posts/:id" element={<Post/> }/>
      <Route  path="*" element={<NaoEncontrada/>}/>
    
    </Routes>
    <Rodape />
    </BrowserRouter>
  );
}
export default AppRoutes;
