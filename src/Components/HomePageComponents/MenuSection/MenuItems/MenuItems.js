import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import './MenuItems.css'
function MenuItems({image , price , description ,food}){
   useEffect(()=> {
    Aos.init();
   } , [])
    return(
        <>
        <div data-aos="fade-up" className="MenuItemsContianer d-flex my-3 w-100 ">
            <img className='me-3' src={image} alt="" />
            <div className="MenuItemsDescription  w-100">
                <div className="MenuTitle w-100">
                <h5 style={{width: '40%'}} className='text-light'>{food} </h5>
                <span style={{width : '45%'}} className='opacity-50 mainColor me-3'>....................................................</span>
                <span style={{width: '15%'}} className='mainColor '>${price}</span>
                </div>
              
                <p className='text-light opacity-75 '>{description}</p>
            </div>
        </div>
        </>
    )
}
export default MenuItems ;