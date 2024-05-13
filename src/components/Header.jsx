import {
  Image,
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Form,
  Row,
  Col,
  ToggleButton,
  Button
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/Header.css";
import useStore from "../store/useStore";

const Header = () => {

  const scrollToTop = () =>{
    window.scrollTo({
      top:0,
    })
  }  
  
  const {cambiarColor, modoOscuro,estiloClaro,estiloOscuro} = useStore()

  return (
    <div  className="header" >
      <Navbar
        expand="lg"
        data-bs-theme="dark"
        className="justify-content-between"
        fixed="top"
        style={modoOscuro?estiloOscuro:estiloClaro}
      >
        <Container>
          <Navbar.Brand style={modoOscuro?estiloOscuro:estiloClaro} className="brand" href="#home" onClick={scrollToTop}>
              💼 Portfolio
              </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#home" onClick={scrollToTop}><Link className="link" to={"/"}>Inicio</Link></Nav.Link> */}
              <Nav.Link className={modoOscuro?"text-white":"text-black"} href="#section1">Sobre mí</Nav.Link>
              <Nav.Link className={modoOscuro?"text-white":"text-black"} href="#section2">Skills</Nav.Link>
              <Nav.Link onClick={scrollToTop} className={modoOscuro?"text-white":"text-black"}><Link className="link" to={"/proyectos"}>Proyectos</Link></Nav.Link>
            </Nav>
            {modoOscuro ? 
                <Button variant="none" size="lg" type="button" onClick={cambiarColor}><i className="fa-regular fa-sun fa-lg"></i></Button>
                :
                <Button className="btnOscuro" variant="none" size="lg" type="button" onClick={cambiarColor}><i className="fa-solid fa-moon fa-lg"></i></Button>
                }
            <Form inline>
           
            <Row className="iconos">
           
              <Col>

            <Navbar.Text className={modoOscuro?"text-white texto":"text-black texto"} >Contacto:</Navbar.Text>
            </Col>
              <Col>
                <Nav.Link href="mailto:aalejoo12@gmail.com"> 
                  <i className="fa-solid fa-envelope fa-1x"></i>
                </Nav.Link>
              </Col>
              <Col>
                <Nav.Link href="https://www.linkedin.com/in/alejo-miguel-albornoz-silva-2131b8172/">
                  <i className="fa-brands fa-linkedin fa-1x"></i>
                  
                </Nav.Link>
               
              </Col>
            </Row>
          </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="text-center foto">
        <Image className="imagen"
          src={
            "https://media.licdn.com/dms/image/D4D03AQFUdJ94JNloyQ/profile-displayphoto-shrink_200_200/0/1703194462289?e=2147483647&v=beta&t=O6JFs-rKpd90m6KYb0gr66XO5tEveY77XtJs0x_tnAo"
          }
          roundedCircle
        ></Image>
        <Container className="mt-4">
        <h1>Hola👋 yo soy</h1>
        <h2>Alejo Miguel, Albornoz Silva</h2>
        </Container>
      </Container>
    </div>
  );
};  

export default Header;
