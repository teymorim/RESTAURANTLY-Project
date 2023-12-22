import { Col, Row } from 'react-bootstrap';
import './EventSectionItems.css'
function EventSectionItems(props){
    return(
        <>
        <div className="EventSectionItemContainer">
            <Row className='row-cols-1 row-cols-lg-2 gy-2'>
            <Col>
            <div className="EventSectionImg">
                <img src={props.image} />
            </div>
            </Col>
            
           <Col>
           <div className="EventSectionDescription">
                <h3 className='mainColor'>{props.title}</h3>
                <h5 className='mainColor opacity-75'>${props.price}</h5>
                <p className='text-light mt-4'>{props.description1}</p>
                <p className='text-light mt-4'>{props.description2}</p>
                <p className='text-light mt-4'>{props.description3}</p>
                <p className='text-light mt-4'>{props.description4}</p>
                <p className='text-light mt-4'>{props.description5}</p>
            </div>
           </Col>

            </Row>
        </div>
        
        </>
    )
}
export default EventSectionItems ;