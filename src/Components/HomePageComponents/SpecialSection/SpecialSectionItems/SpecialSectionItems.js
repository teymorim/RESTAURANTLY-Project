import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import './SpecialSectionItems.css'
function SpecialSectionItems({title , description1 , description2 , image}){
    useEffect(()=>{
        Aos.init()
    } , [])
    return(
        <>
        <div data-aos="zoom-in" className="specialItemsContainer  ">
        <Row className='row-cols-1 align-items-center justify-content-center' > 
            <Col  lg={8}  >
                <h2 className='text-light'>{title}</h2>
                <p className='text-light opacity-75'>{description1}</p>
                <p className='text-light opacity-75'>{description2}</p>
            </Col>
            
           <Col  lg={4}>
                <img src={image}  />
           </Col>
        </Row>
        </div>
        </>
    )
}
export default SpecialSectionItems;