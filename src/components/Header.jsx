import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div style={{position:"fixed" , zIndex:"1",   width: "100%" ,top:"0" }}>
    <Navbar bg="dark" expand="lg" >
      <Container fluid>
        <Navbar.Brand href="#"><Link to="/" style={{textDecoration:"none"}}><span style={{color:"white", paddingLeft:"20px" }}>Apna</span><span style={{color:"lightgreen"}}>Libas</span></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px',marginLeft:"650px" }}
            navbarScroll
          >
            <Nav.Link  ><Link to="/" style={{paddingLeft:"40px" ,color:"white",textDecoration:"none"}}>Home</Link></Nav.Link>
            <Nav.Link ><Link to="/Gallery" style={{paddingLeft:"40px",color:"white",textDecoration:"none" }}>Gellery</Link></Nav.Link>
            <Nav.Link >
            <Link to="/About" style={{paddingLeft:"40px",color:"white",textDecoration:"none"}}>About</Link>
            </Nav.Link>
            <Nav.Link >
            <Link to="/Contact" style={{paddingLeft:"40px",color:"white",textDecoration:"none"}}>Contact us</Link>
            </Nav.Link>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>

  );
}

export default Header;