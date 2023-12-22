
import { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import useGetAxios from '../../../hooks/hookGetAxios/useGetAxios';
import './SpecialSection.css'
import SpecialSectionItems from './SpecialSectionItems/SpecialSectionItems';
function SpecialSection(){
    const [dataShow , setDataShow] = useState('btn1')
    const data = useGetAxios('http://localhost:5000/specialItems')

    
    return(
        <>
        <div className="SpecialContianer ">
            <Row className='row-cols-1 gy-4 align-items-center justify-content-center '>
                <Col lg={3}>
                    <div className="SpesialListTitle ">
                        <Button onClick={() => setDataShow('btn1')} className={dataShow == 'btn1' ? 'activebtn' : ''}>Modi sit est</Button>
                        <Button onClick={() => setDataShow('btn2')} className={dataShow == 'btn2' ? 'activebtn' : ''}>Unde prasesentium sed</Button>
                        <Button onClick={() => setDataShow('btn3')} className={dataShow == 'btn3' ? 'activebtn' : ''}>Pariatur explicabo vel</Button>
                        <Button onClick={() => setDataShow('btn4')} className={dataShow == 'btn4' ? 'activebtn' : ''}>nostrum qui quasi</Button>
                        <Button onClick={() => setDataShow('btn5')} className={dataShow == 'btn5' ? 'activebtn' : ''}>Iusto ut expedita aut</Button>
                    </div>
                </Col>
            
           
                <Col lg={9}>
                <div className="SpecialListDescription ">
                        {dataShow == 'btn1' &&   data.filter(item => item.id == 1).map(
                            item => <SpecialSectionItems key={item.id} {...item} />
                        )}

                        {dataShow == 'btn2' &&   data.filter(item => item.id == 2).map(
                                                    item => <SpecialSectionItems key={item.id} {...item} />
                                                )}

                        {dataShow == 'btn3' &&   data.filter(item => item.id == 3).map(
                                                    item => <SpecialSectionItems key={item.id} {...item} />
                                                )}

                        {dataShow == 'btn4' &&   data.filter(item => item.id == 4).map(
                                                    item => <SpecialSectionItems key={item.id} {...item} />
                                                )}

                        {dataShow == 'btn5' &&   data.filter(item => item.id == 5).map(
                            item => <SpecialSectionItems key={item.id} {...item} />
                        )}
                        
                    </div>
                </Col>
           </Row>
        </div>
        
        </>
    )
}
export default SpecialSection;