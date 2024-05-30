import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Proyectos from "./pages/Proyectos";
import useStore from "./store/useStore";
import { createGlobalStyle } from "styled-components";
import UltimaVisita from "./components/UltimaVisita";

const GlobalStyle = createGlobalStyle`
  body {
   ${(props) => (props.modoOscuro ? props.estiloOscuro : props.estiloClaro)};
  }
`;

function App() {
  const { modoOscuro, estiloClaro, estiloOscuro } = useStore();

  return (
    <>
      <GlobalStyle modoOscuro={modoOscuro} estiloClaro={estiloClaro} estiloOscuro={estiloOscuro} />
      {/* <div style={modoOscuro ? estiloOscuro : estiloClaro}> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      <UltimaVisita/>

    </>
  );
}

export default App;
