import axios from 'axios'
import { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'

import './ChefSection.css'
import ChefSectionItem from './ChefSectionItem/ChefSectionItem'
function ChefSection(){
    const [data , setData] = useState([])
    useEffect(()=> {
        axios.get('https://teymorim.github.io/reastaurantlyApiFake/db.json')
        .then(response => setData(response.data.chefs))
    } ,[])
  
    return(
        <>
        <div className="ChefSectionContainer py-5">
            <Row className='row-cols-1 row-cols-lg-3 gy-3'>
            {data.map(item => <Col key={item.id}> <ChefSectionItem  {...item} /></Col>)}

            </Row>
            
        </div>
        
        </>
    )
}
export default ChefSection