import { Col, Container, Row } from 'react-bootstrap'
import './MyFooter.css'
function MyFooter(){
    return(
        <>
        <footer className="footerContainer text-light py-4">
            <Container>
                <Row className='row-cols-1 row-cols-md-2 justify-content-between align-items-center'>
                    <Col>
                        <h1 className='mainColor mb-3'>RESTAURANTLY</h1>
                        <p className='opacity-75'><b>Address: </b> A108 Adam Street <br /> NY 535022, USA</p>
                        <p className='opacity-75'><b>Phone: </b>+1 5589 55488 55</p>
                        <p className='opacity-75'><b>Email: </b>info@example.com</p>
                        
                    </Col>

                    <Col>
                     <h5>Our Newsletter</h5>
                     <p className='opacity-75'>Tamen quem nulla quae legam multos aute sint <br /> culpa legam noster magna</p>
                    </Col>
                </Row>

            </Container>
        </footer>
        </>
    )
}
export default MyFooter