import { useState } from "react";
import {
  Col,
  Container,
  Row,
  Card,
  CardGroup,
  Button,
  Modal,
} from "react-bootstrap";
import "../css/MainProyectos.css";
import useStore from "../store/useStore";

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
          <h2 className="mb-4">Trabajos Prácticos</h2>
        </div>
        <CardGroup>
          <Card
            text={modoOscuro ? "white" : "black"}
            style={modoOscuro ? estiloOscuro : estiloClaro}
          >
            <Card.Body>
              <Card.Title>Proyecto 1</Card.Title>
              <Card.Text>
                <iframe
                  width="580"
                  height="500"
                  src="https://www.youtube.com/embed/bbZAnSNT04w"
                  title="Video Hospital C#"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen="false"
                ></iframe>
              </Card.Text>
              <Button
                className="botonProyecto"
                onClick={() => setShowPro1(true)}
              >
                Saber más
              </Button>
              <Modal size="lg" show={showPro1} onHide={handleClosePro1}>
                <Modal.Header closeButton>
                  <Modal.Title>Proyecto 1</Modal.Title>
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
            </Card.Body>
          </Card>
          <Card
            text={modoOscuro ? "white" : "black"}
            style={modoOscuro ? estiloOscuro : estiloClaro}
          >
            <Card.Body>
              <Card.Title>Proyecto 2</Card.Title>
              <Card.Text>
                <iframe
                  width="580"
                  height="500"
                  src="https://www.youtube.com/embed/scNcEqjliuc"
                  title="Video Hospital Web"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen="false"
                ></iframe>
              </Card.Text>
              <Button
                className="botonProyecto"
                onClick={() => setShowPro2(true)}
              >
                Saber más
              </Button>
              <Modal size="lg" show={showPro2} onHide={handleClosePro2}>
                <Modal.Header closeButton>
                  <Modal.Title>Proyecto 2</Modal.Title>
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
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
      <Container id="section2" className="titulosCards2 text-center">
        <div style={modoOscuro ? estiloOscuro : estiloClaro}>
          <h2 className="text-center mb-4">Propios</h2>
        </div>
        <CardGroup>
          <Card
            text={modoOscuro ? "white" : "black"}
            style={modoOscuro ? estiloOscuro : estiloClaro}
          >
            <Card.Body>
              <Card.Title>Proyecto 3</Card.Title>
              <Card.Text>
                <iframe
                  width="580"
                  height="500"
                  src="https://www.youtube.com/embed/-iuLKvTJUzA"
                  title="Pokémon Api"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen="false"
                ></iframe>
              </Card.Text>
              <Button
                className="botonProyecto"
                onClick={() => setShowPro3(true)}
              >
                Saber más
              </Button>
              <Modal size="lg" show={showPro3} onHide={handleClosePro3}>
                <Modal.Header closeButton>
                  <Modal.Title>Proyecto 3</Modal.Title>
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
                  Link de la página en cuestión: <br/>
                  <a href="https://pokeapialejo.netlify.app/">https://pokeapialejo.netlify.app/</a>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="danger" onClick={handleClosePro3}>
                    Cerrar
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </Card>
          <Card
            text={modoOscuro ? "white" : "black"}
            style={modoOscuro ? estiloOscuro : estiloClaro}
          >
            <Card.Body>
              <Card.Title>Proyecto 4</Card.Title>
              <Card.Text className="textoCards">COMING SOON...</Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </>
  );
};

export default MainProyectos;
