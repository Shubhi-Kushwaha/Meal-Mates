import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../../Styles/HeaderStyle.css";
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo.jpg";
function Header(){
  return (
    <header>
      <Navbar expand="lg" >
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/" className='logo'>
          <img src={Logo} alt="Logo" className='img-fluid'></img></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
            <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/">
             <div className='cart'>
              <i class="bi bi-bag fs-5"></i>
              <em className='roundpoint'>2</em>
             </div>
            </Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <br />
      
    </header>
  )
}
export default Header