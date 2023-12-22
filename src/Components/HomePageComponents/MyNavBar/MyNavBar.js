import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './MyNavBar.css'
function MyNavBar(){
    const expand = 'xl'
    return(
        <>
        <div className="MyNavBarContainer">
        <Navbar key={expand} expand={expand}  >
          <Container >
            <Navbar.Brand className='text-light' href="#">RESTAURANTLY</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                RESTAURANTLY
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center  flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">About</Nav.Link>
                  <Nav.Link href="#action3">Menu</Nav.Link>
                  <Nav.Link href="#action4">Specials</Nav.Link>
                  <Nav.Link href="#action5">Events</Nav.Link>
                  <Nav.Link href="#action6">Chefs</Nav.Link>
                  <Nav.Link href="#action7">Gallery</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action8">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#action8">Contact</Nav.Link>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <Button className='btnNavBar'>BOOK A TABLE</Button>
          </Container>
        </Navbar>

        </div>
        
        </>
    )
}
export default MyNavBar;