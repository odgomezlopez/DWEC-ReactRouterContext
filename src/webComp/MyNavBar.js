import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image'

//Dependencias del contexto
import React, { useContext } from 'react';
import { MyContext } from '../Context/context';

//TODO Autofill en base a props

function MyNavBar(props) {
  //Accedo al contexto:
  const { user } = useContext(MyContext);

  return (
    <Navbar className="bg-success" collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          {/*<Image style={{width: '60px'}} src={props.logo} rounded  />*/}
          {props.title}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/frutas">Frutas</Nav.Link>
            <NavDropdown title="Verduras" id="collasible-nav-dropdown">
              <NavDropdown.Item></NavDropdown.Item>
              <NavDropdown.Item href="/verdura/calabines">
                Calabacines
              </NavDropdown.Item>
              <NavDropdown.Item href="/verdura/patatas">Patatas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/verdura/locales">
                De la provincia
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/username">
              {user}
            </Nav.Link>

            <Nav.Link href="/carrito">Carrito <i className="bi bi-basket-fill"></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;