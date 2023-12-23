import axios from 'axios';
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

import './GalleySection.css'
function GalleySection(){
        const [data , setData] = useState([])
        useEffect(()=> {
            axios.get('https://teymorim.github.io/reastaurantlyApiFake/db.json')
            .then(response => setData(response.data.Gallery))
        } ,[])
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