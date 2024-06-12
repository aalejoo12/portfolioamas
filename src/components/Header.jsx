import {
  Image,
  Navbar,
  Nav,
  Container,
  Form,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/Header.css";
import useStore from "../store/useStore";
import { motion } from "framer-motion";
import asdasd from "../../public/asdasd.jpg" 

const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const { cambiarColor, modoOscuro, estiloClaro, estiloOscuro } = useStore();

  return (    
    <div className="header">
      <Navbar
        expand="lg"
        data-bs-theme="dark"
        className="justify-content-between"
        fixed="top"
        style={modoOscuro ? estiloOscuro : estiloClaro}
      >
        <Container>
          <Navbar.Brand
            style={modoOscuro ? estiloOscuro : estiloClaro}
            className="brand"
            href="#home"
            onClick={scrollToTop}
          >
           💼 Portfolio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {modoOscuro ? (
              <Nav className="me-auto">
                <button>
                  <a href="#section1" className="btn2"><span className="spn2">Sobre mí</span></a>
                </button>
                <button>
                  <a href="#section2" className="btn2"><span className="spn2">Skills</span></a>
                </button>
                <button>
                <Link onClick={scrollToTop} className="link btn2" to={"/proyectos"}><span className="spn2"> 
                    Proyectos
                  </span></Link>
                </button>
              </Nav>
            ) :
              (<Nav className="me-auto">
                <button>
                  <a href="#section1" className="btn3"><span className="spn2">Sobre mí</span></a>
                </button>
                <button>
                  <a href="#section2" className="btn3"><span className="spn2">Skills</span></a>
                </button>
                <button>
                <Link onClick={scrollToTop} className="link btn3" to={"/proyectos"}><span className="spn2 text-black"> 
                    Proyectos
                  </span></Link>
                </button>
              </Nav>)}

            {/* <Nav className="me-auto">
              
              <Nav.Link
                className={modoOscuro ? "text-white" : "text-black"}
                href="#section1"
              >
                Sobre mí
              </Nav.Link>
              <Nav.Link
                className={modoOscuro ? "text-white" : "text-black"}
                href="#section2"
              >
                Skills
              </Nav.Link>
              <Nav.Link
                onClick={scrollToTop}
                className={modoOscuro ? "text-white" : "text-black"}
              >
                <Link className="link" to={"/proyectos"}>
                  Proyectos
                </Link>
              </Nav.Link>
              
            </Nav> */}

            {modoOscuro ? (
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                <Button
                  variant="none"
                  size="lg"
                  type="button"
                  onClick={cambiarColor}
                >
                  <i className="fa-regular fa-sun fa-lg"></i>
                </Button>
              </motion.div>
            ) : (
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                <Button
                  className="btnOscuro"
                  variant="none"
                  size="lg"
                  type="button"
                  onClick={cambiarColor}
                >
                  <i className="fa-solid fa-moon fa-lg"></i>
                </Button>
              </motion.div>
            )}
            <Form inline>
              <Row className="iconos">
                <Col>
                  <Navbar.Text
                    className={
                      modoOscuro ? "text-white texto" : "text-black texto"
                    }
                  >
                    Contacto:
                  </Navbar.Text>
                </Col>
                <Col>
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                    <Nav.Link href="mailto:aalejoo12@gmail.com">
                      <i className="fa-solid fa-envelope fa-1x"></i>
                    </Nav.Link>
                  </motion.div>
                </Col>
                <Col>
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                    <Nav.Link href="https://www.linkedin.com/in/alejo-miguel-albornoz-silva-2131b8172/" target="blank">
                      <i className="fa-brands fa-linkedin fa-1x"></i>
                    </Nav.Link>
                  </motion.div>
                </Col>
                <Col>
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                    <Nav.Link href="https://github.com/aalejoo12" target="blank">
                      <i className="fa-brands fa-github"></i>
                    </Nav.Link>
                  </motion.div>

                </Col>
              </Row>

            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
          transition={{
            ease: "linear",
            duration: 2,
            x: { duration: 1 },
          }}
        > */}
      <Container className="text-center foto">

        <Image className="imagen" src={asdasd} roundedCircle/>

        <Container className="mt-4">
          {/* <marquee><h1>Hola👋 yo soy</h1></marquee> */}
          <h1>Hola👋 yo soy</h1>
          <h2>Alejo Miguel, Albornoz Silva</h2>
        </Container>
      </Container>
      {/* </motion.div> */}

    </div>
  );
};

export default Header;
