import { Col, Row } from 'react-bootstrap'
import useGetAxios from '../../../hooks/hookGetAxios/useGetAxios'
import './ChefSection.css'
import ChefSectionItem from './ChefSectionItem/ChefSectionItem'
function ChefSection(){
    const data = useGetAxios('http://localhost:5000/chefs')
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