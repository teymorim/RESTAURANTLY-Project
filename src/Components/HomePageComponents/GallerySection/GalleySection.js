import { Col, Row } from 'react-bootstrap';
import useGetAxios from '../../../hooks/hookGetAxios/useGetAxios';
import './GalleySection.css'
function GalleySection(){
    const data = useGetAxios('http://localhost:5000/gallery')
    return(
        <>
        <div className="GallerySectionContianer py-4">
            <Row className='row-cols-1 row-cols-md-2 row-cols-lg-4  gy-4'>
                {data.map( item => 
                   <Col key={item.id}>
                    <img src={item.image}  />
                   </Col> 
                    )}
            </Row>
        </div>
        </>
    )
}
export default GalleySection;