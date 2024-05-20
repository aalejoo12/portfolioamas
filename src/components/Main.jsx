import React from "react";
import { Container, Row, Col, Card, CardGroup } from "react-bootstrap";
import "../css/Main.css";
import useStore from "../store/useStore";
import { Typewriter } from "react-simple-typewriter";

const Main = () => {
  const { modoOscuro, estiloClaro, estiloOscuro } = useStore();

  return (
    <>
      <Container id="section1" className="aboutme">
        <Row>
          <Col md={6}>
            <div style={modoOscuro ? estiloOscuro : estiloClaro}>
              <h2 className="mb-4">Sobre mí</h2>
              <h3>
                <Typewriter
                  words={[
                    "Soy estudiante de la Tecnicatura Universitaria en Programación dictado en la UTN FRT en la cual me encuentro cursando el 2do año. Mi objetivo es poder graduarme y al mismo tiempo conseguir experiencia en el ambiente laboral IT",
                  ]}
                  loop={false} // Puedes configurar si quieres que se repita la animación
                  cursor
                  cursorStyle="_"
                  typeSpeed={8} // Velocidad de escritura en milisegundos
                  deleteSpeed={2} // Velocidad de borrado en milisegundos
                  delaySpeed={8000} // Tiempo de espera entre escritura y borrado en milisegundos
                />
              </h3>
              {/* <h3>
                Soy estudiante de la Tecnicatura Universitaria en Programación
                dictado en la UTN FRT en la cual me encuentro cursando el 2do
                año. Mi objetivo es poder graduarme y al mismo tiempo conseguir
                experiencia en el ambiente laboral IT
              </h3> */}
            </div>
          </Col>
          <Col md={{ span: 2, offset: 2 }}>
            <a href="https://frt.cvg.utn.edu.ar/" target="blank">
              <img
                src="https://pbs.twimg.com/profile_images/998209251339259904/8S8TSIFi_400x400.jpg"
                className="logoUTN"
              />
            </a>
          </Col>
        </Row>
      </Container>

      <Container className="d-flex text-center">
        <Row className="d-flex container-fluid">
          <div
            id="section2"
            className="text-center skills"
            style={modoOscuro ? estiloOscuro : estiloClaro}
          >
            <h2 className="mb-5">Skills</h2>
          </div>
          {/* <CardGroup className="group1"> */}
          <Col className="d-flex justify-content-center">
            <Card
              text={modoOscuro ? "white" : "black"}
              style={modoOscuro ? estiloOscuro : estiloClaro}
            >
              <Card.Img
                variant="top"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png"
              />
              <Card.Body>
                <Card.Title>HTML</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="d-flex justify-content-center">
            <Card
              text={modoOscuro ? "white" : "black"}
              style={modoOscuro ? estiloOscuro : estiloClaro}
            >
              <Card.Img
                variant="top"
                src="https://cdn.icon-icons.com/icons2/1826/PNG/512/4202020css3htmllogosocialsocialmedia-115668_115633.png"
              />
              <Card.Body>
                <Card.Title>CSS</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="d-flex justify-content-center">
            <Card
              text={modoOscuro ? "white" : "black"}
              style={modoOscuro ? estiloOscuro : estiloClaro}
            >
              <Card.Img
                variant="top"
                src="https://cdn.icon-icons.com/icons2/2108/PNG/512/javascript_icon_130900.png"
              />
              <Card.Body>
                <Card.Title>JavaScript</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          {/* <CardGroup className="group2"> */}
          <Col className="d-flex justify-content-center">
            <Card
              text={modoOscuro ? "white" : "black"}
              style={modoOscuro ? estiloOscuro : estiloClaro}
            >
              <Card.Img
                variant="top"
                src="https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_logo_icon_146374.png"
              />
              <Card.Body>
                <Card.Title>React</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="d-flex justify-content-center">
            <Card
              text={modoOscuro ? "white" : "black"}
              style={modoOscuro ? estiloOscuro : estiloClaro}
            >
              <Card.Img
                variant="top"
                src="https://cdn-icons-png.flaticon.com/512/4492/4492311.png"
              />
              <Card.Body>
                <Card.Title>Sql Server</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="d-flex justify-content-center">
            <Card
              text={modoOscuro ? "white" : "black"}
              style={modoOscuro ? estiloOscuro : estiloClaro}
            >
              <Card.Img
                variant="top"
                src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png"
              />
              <Card.Body>
                <Card.Title>C#</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Main;
