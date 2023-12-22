import { Button, Col, Container, Row } from 'react-bootstrap';
import './HeroSection.css'
import { FaPlay } from "react-icons/fa";

function HeroSection(){
    return(
        <>
        <div className="HeroSectionContainer" >
            <Container> 
                <Row className=' justify-content-center align-items-center'>
                    <Col sm={9} >
                       <div className='d-flex flex-column aling-itmes-start justify-content-center'>
                       <h1 className='text-light'>Welcome to <span className='mainColor'>Restaurantly</span></h1>
                        <p className='text-light fs-5'>Delivering great food for more than 18 years!</p>
                        <div className="heroBtns">
                            <Button>Our Menu</Button>
                            <Button>Book A Table</Button>
                        </div>
                       </div>
                    </Col>

                    <Col sm={3} >
                        <div className="iconPlay">
                            <div className="play-btn-box">
                            <div className="play-button"><FaPlay /></div>
                            <div className="play-btn-line1" id="line1">
                            <div className="play-btn-line2" id="line2"></div>
                        </div>
                        </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}
export default HeroSection;