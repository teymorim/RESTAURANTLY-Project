import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import useGetAxios from '../../../hooks/hookGetAxios/useGetAxios';
import MenuItems from './MenuItems/MenuItems';
import './MenuSection.css'
function MenuSection(){
    const [show , setShow] = useState('allMenu')
    const [dataMenu , setDataMenu] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/${show}`)
        .then(response => setDataMenu(response.data))

    } , [show])
    
    
    return(
        <>
        <div className="MenuSection" >
            <div className="MenuBtns d-flex align-items-center justify-content-center">
                <Button onClick={() => setShow('allMenu')} className={show == 'allMenu' ? 'activebtn' : ''}>All</Button>
                <Button onClick={() => setShow('startersMenu')} className={show == 'startersMenu' ? 'activebtn' : ''}>Starters</Button>
                <Button onClick={() => setShow('saladMenu')} className={show == 'saladMenu' ? 'activebtn' : ''}>Salads</Button>
                <Button onClick={() => setShow('speciallyMenu')} className={show == 'speciallyMenu' ? 'activebtn' : ''}>Specially</Button>
            </div>
            <Row className='row-cols-1 row-cols-lg-2 gy-2 mt-5'>
                {show == 'allMenu' && dataMenu.map(item => <Col key={item.id} ><MenuItems {...item} /></Col>)}
                {show == 'startersMenu' && dataMenu.map(item => <Col key={item.id} ><MenuItems {...item} /></Col>)}
                {show == 'saladMenu' && dataMenu.map(item => <Col key={item.id} ><MenuItems {...item} /></Col>)}
                {show == 'speciallyMenu' && dataMenu.map(item => <Col key={item.id} ><MenuItems {...item} /></Col>)}
            </Row>
        </div>
        </>
    )
}
export default MenuSection ;