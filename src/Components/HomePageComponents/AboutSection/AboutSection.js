import { Col, Container, Row } from 'react-bootstrap';
import { CiCircleCheck } from "react-icons/ci";
import './AboutSection.css'
function AboutSection(){
    return(
        <>
        <div className="AboutSection" >
            <Container>
                <Row className='row-cols-1 row-cols-lg-2 py-5 gy-2 align-items-start'>
                    <Col>
                        <div className="aboutDescription text-light">
                            <h2>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <p><span className='mainColor'><CiCircleCheck size='25px'  /> </span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <p><span className='mainColor'><CiCircleCheck size='25px'  /> </span>Duis aute irure dolor in reprehenderit in voluptate velit</p>
                            <p><span className='mainColor'><CiCircleCheck size='25px'  /> </span> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</p>
                            <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </div>
                    </Col>

                    <Col>
                        <img style={{border: '1px solid #CDA45E '}} className='img-fluid' src="https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/about.jpg"  />
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}
export default AboutSection;