import { Col, Row } from 'react-bootstrap';
import { CiLocationOn ,CiClock2  } from "react-icons/ci";
import { MdOutlineMailOutline ,MdCall  } from "react-icons/md";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './ContactUsSection.css'
function ContactUsSection(){
    return(
        <>
        <div className="ContactUsSectionContainer py-5">
            <Row className='row-cols-1 '>
                <Col lg={4}>
                    <Row className='row-cols-1'>
                        <Col className='text-light'>
                        <div className="ContactItem mb-4 d-flex align-items-start justify-content-start">
                            <div className="ContactIcon">
                                <p><CiLocationOn size='30px' /></p>
                            </div>
                            <div className="ContactDecription ms-4">
                                <h5>Location:</h5>
                                <span className='opacity-75'>A108 Adam Street, <br /> New York, NY 535022</span>
                            </div>
                        </div>
                        </Col>

                        <Col className='text-light'>
                        <div className="ContactItem mb-4 d-flex align-items-start justify-content-start">
                            <div className="ContactIcon">
                                <p><CiClock2 size='30px'  /></p>
                            </div>
                            <div className="ContactDecription ms-4">
                                <h5>Open Hours:</h5>
                                <span className='opacity-75'>Monday-Saturday: <br /> 11:00 AM - 2300 PM</span>
                            </div>
                        </div>
                        </Col>

                        <Col className='text-light'>
                        <div className="ContactItem mb-4 d-flex align-items-start justify-content-start">
                            <div className="ContactIcon">
                                <p><MdOutlineMailOutline size='30px'  /></p>
                            </div>
                            <div className="ContactDecription ms-4">
                                <h5>Email:</h5>
                                <span className='opacity-75'>info@example.com</span>
                            </div>
                        </div>
                        </Col>

                        <Col className='text-light'>
                        <div className="ContactItem mb-4 d-flex align-items-start justify-content-start">
                            <div className="ContactIcon">
                                <p><MdCall size='30px'   /></p>
                            </div>
                            <div className="ContactDecription ms-4">
                                <h5>Call:</h5>
                                <span className='opacity-75'>+1 5589 55488 55s</span>
                            </div>
                        </div>
                        </Col>
                    </Row>
                
                </Col>

                <Col lg={8}>
                <Form  className='text-center'>
                    <Row>
                        <Col>
                        <Form.Control className='mb-4' type='text' placeholder="Your name" />
                        </Col>
                        <Col>
                        <Form.Control className='mb-4' type='email' placeholder="Your email" />
                        </Col>
                    </Row>
                    <Form.Control className='mb-4' type='text' placeholder="Subject" />
                    <Form.Control className='mb-4' as="textarea" rows={4} placeholder="Message" />
                    <Button  type="submit">Send Message</Button>
                </Form>
                </Col>

            </Row>
        </div>
        </>
    )
}
export default ContactUsSection;