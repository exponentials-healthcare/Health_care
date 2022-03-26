import React from 'react';
import {Navbar} from  'react-bootstrap';
import Nav from  'react-bootstrap/Nav';
import {Container} from  'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import '../Stylesheets/Header.css'
import logo from '../images/logo3.png';
import {FaHome} from 'react-icons/fa';
import {BiNews} from 'react-icons/bi';
import {CgProfile} from 'react-icons/cg'
import { LinkContainer } from 'react-router-bootstrap';
function Header () {
  return (
  <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
         <Container>
            <img src={logo} alt="logo"  width={40} id="logo"></img>
            <Navbar.Brand>Healthy Feeds</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                {/* <Nav className="me-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                
                {/* </Nav> */}
                <Nav>
                {/* <NavDropdown title="News" className='linkText' id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
                <LinkContainer to="/">
             
                <Nav.Link><div className="linkText"><FaHome></FaHome> Home</div></Nav.Link>
                </LinkContainer>
                {/* <LinkContainer to="/#explore"> */}
                {/* <Nav.Link  href="#explore"><div className="linkText"><BiNews></BiNews> News</div></Nav.Link> */}
                {/* </LinkContainer> */}

                 <div className="newsicon"><BiNews></BiNews></div>
                 
                <NavDropdown title="News" className="linkText" >
                
                    <LinkContainer to="/GlobalNews">
                    <NavDropdown.Item >Global News</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/Mental">   
                    <NavDropdown.Item >Fitness</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/Covid">
                    <NavDropdown.Item >Covid</NavDropdown.Item>
                    </LinkContainer>
                </NavDropdown>
                

                <LinkContainer to="/SignIn">
                <Nav.Link  ><div className="linkText"><CgProfile></CgProfile> Profile</div></Nav.Link>
                </LinkContainer>  
                </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
  </div>
  );
}
export default Header