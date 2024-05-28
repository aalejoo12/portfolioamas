import { useState } from "react";
import {
  Col,
  Container,
  Row,
  Card,
  CardGroup,
  Button,
  Modal
} from "react-bootstrap";
import "../css/MainProyectos.css";
import useStore from "../store/useStore";
import VideoComponent from "./VideoComponent";
import VideoComponent2 from "./VideoComponent2";
import VideoComponent3 from "./VideoComponent3";

const MainProyectos = () => {

  const [showPro1, setShowPro1] = useState(false);
  const [showPro2, setShowPro2] = useState(false);
  const [showPro3, setShowPro3] = useState(false);

  const handleClosePro1 = () => setShowPro1(false);
  const handleClosePro2 = () => setShowPro2(false);
  const handleClosePro3 = () => setShowPro3(false);

  const { modoOscuro, estiloClaro, estiloOscuro } = useStore();

  return (
    <>
      <Container id="section1" className="titulosCards text-center">
        <div style={modoOscuro ? estiloOscuro : estiloClaro}>
          <h2 className="mb-5">Trabajos Prácticos</h2>
        </div>
          <Container className="mb-5 video">
            <h3 style={modoOscuro ? estiloOscuro : estiloClaro}>Proyecto 1</h3>
            <VideoComponent />
            <Button
              className="botonProyecto"
              onClick={() => setShowPro1(true)}
            >
              Saber más
            </Button>
            <Modal size="lg" show={showPro1} onHide={handleClosePro1}>
              <Modal.Header closeButton>
                <Modal.Title className="tituloModal">Proyecto 1</Modal.Title>
              </Modal.Header>
              <Modal.Body className="cuerpoModal">
                Este proyecto es un trabajo final de 1er año de la Tecnicatura
                Universitaria en Programación de la UTN FRT. El cual consiste
                en realizar una aplicación de escritorio de un hospital que
                tenga su CRUD correspondiente unicamente para la asignación de
                turnos. Este mismo fue creado mediante la utilización de C# y
                SQL Server Management, conectando este ultimo con nuestra
                aplicación y realizando las consultas correspondientes para el
                correcto manejo de los datos.
              </Modal.Body>
              <Modal.Footer>
                <Button variant="danger" onClick={handleClosePro1}>
                  Cerrar
                </Button>
              </Modal.Footer>
            </Modal>
          </Container>
          <Container className="mt-5 mb-5 video">
          <h3 style={modoOscuro ? estiloOscuro : estiloClaro}>Proyecto 2</h3>
            <VideoComponent2 />
            <Button
              className="botonProyecto"
              onClick={() => setShowPro2(true)}
            >
              Saber más
            </Button>
            <Modal size="lg" show={showPro2} onHide={handleClosePro2}>
              <Modal.Header closeButton>
                <Modal.Title className="tituloModal">Proyecto 2</Modal.Title>
              </Modal.Header>
              <Modal.Body className="cuerpoModal">
              Este proyecto es un trabajo final de 1er año de la Tecnicatura
                  Universitaria en Programación de la UTN FRT. El cual consiste
                  en realizar una aplicación web de un hospital que tenga su
                  CRUD correspondiente unicamente para la asignación de turnos.
                  Este mismo fue creado mediante la utilización de HTML, CSS, JS
                  y realizando peticiones HTTP a una base de datos ficticia de
                  un archivo json creado por nosotros mismos.
              </Modal.Body>
              <Modal.Footer>
                <Button variant="danger" onClick={handleClosePro2}>
                  Cerrar
                </Button>
              </Modal.Footer>
            </Modal>
          </Container>
      </Container>
      <Container className="titulosCards2 text-center">
        <div id="section2" style={modoOscuro ? estiloOscuro : estiloClaro}>
          <h2 className="text-center">Propios</h2>
        </div>
          <Container className="mt-5 mb-5 video">
            <h3>Proyecto 3</h3>
          <VideoComponent3/>
              <Button
                className="botonProyecto"
                onClick={() => setShowPro3(true)}
              >
                Saber más
              </Button>
              <Modal size="lg" show={showPro3} onHide={handleClosePro3}>
                <Modal.Header closeButton>
                  <Modal.Title className="tituloModal">Proyecto 3</Modal.Title>
                </Modal.Header>
                <Modal.Body className="cuerpoModal">
                  Este proyecto es un trabajo propio realizado a partir de una
                  evaluacion de LanderTech que consiste en la consumición de una
                  API llamada PokéApi, con la cual se nos solicitaba mostrar
                  todos los Pokemones de una manera simple y original incluyendo
                  sus imágenes, nombres y características además de un filtro,
                  un buscador, paginación y la página en modo claro/oscuro. Fue
                  realizado utilizando React.js, Axios, Vite, Bootstrap,
                  React-Bootstrap, FontAwesome, Zustand, Framer Motion,
                  Styled-Components y React-Router-Dom, más el manejo de estilos
                  mediante CSS.
                  <br />
                  Link de la página en cuestión: <br />
                  <a href="https://pokeapialejo.netlify.app/" target="blank">https://pokeapialejo.netlify.app/</a>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="danger" onClick={handleClosePro3}>
                    Cerrar
                  </Button>
                </Modal.Footer>
              </Modal>
              </Container>
          <Container className="mt-5 video">
            <Card.Body>
              <h3>Proyecto 4</h3>
              <Card.Text className="textoCards">COMING SOON...</Card.Text>
            </Card.Body>
          </Container>
      </Container>
    </>
  );
};

export default MainProyectos;
