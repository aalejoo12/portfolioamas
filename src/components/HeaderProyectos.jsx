import { Navbar, Container,Nav, Row, Col, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "../css/HeaderProyectos.css"
import useStore from "../store/useStore";



const HeaderProyectos = () => {

    const scrollToTop = () =>{
        window.scrollTo({
          top:0,
        })
      }      

      const {cambiarColor, modoOscuro,estiloClaro,estiloOscuro} = useStore()




  return (
    <div className='headerpro'> <Navbar
    expand="lg"
    data-bs-theme="dark"
    className="justify-content-between"
    fixed="top"
    style={modoOscuro?estiloOscuro:estiloClaro}

  >
    <Container >
      <Navbar.Brand style={modoOscuro?estiloOscuro:estiloClaro} className="brand" href="#home" onClick={scrollToTop}>
          💼 Portfolio
          </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link className={modoOscuro?"text-white":"text-black"} onClick={scrollToTop}><Link className='link' to={"/"}>Home</Link></Nav.Link>
          <Nav.Link className={modoOscuro?"text-white":"text-black"} href="#section1">Trabajos Prácticos</Nav.Link>
          <Nav.Link className={modoOscuro?"text-white":"text-black"} href="#section2">Propios</Nav.Link>
          {/* <Nav.Link><Link className='link' to={"/proyectos"}>Proyectos</Link></Nav.Link> */}
        </Nav>
        {modoOscuro ? 
                <Button variant="none" size="lg" type="button" onClick={cambiarColor}><i className="fa-regular fa-sun fa-lg"></i></Button>
                :
                <Button className="btnOscuro" variant="none" size="lg" type="button" onClick={cambiarColor}><i className="fa-solid fa-moon fa-lg"></i></Button>
                }
        <Form inline>
        <Row className="iconos">
          <Col>
        <Navbar.Text className={modoOscuro?"text-white texto":"text-black texto"}>Contacto:</Navbar.Text>
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
  </div>
  )
}

export default HeaderProyectos