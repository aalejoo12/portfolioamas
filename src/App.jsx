import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Proyectos from "./pages/Proyectos";
import useStore from "./store/useStore";

function App() {

  

  const { modoOscuro, estiloClaro, estiloOscuro } = useStore()



  return (
    <div style={modoOscuro ? estiloOscuro : estiloClaro}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div> 
  );
}

export default App;
