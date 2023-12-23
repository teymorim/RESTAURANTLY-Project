import './EventSection.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import EventSectionItems from './EventSectionItems/EventSectionItems';
import { useEffect, useState } from 'react';
import axios from 'axios';

function EventSection(){
    const [data , setData] = useState([])
    useEffect(()=> {
        axios.get('https://teymorim.github.io/reastaurantlyApiFake/db.json')
        .then(response => setData(response.data.eventitems))
    } ,[])
    return(
        <>
        <div className="EventSectionContainer my-2">
        <Swiper className='py-5'
        modules={[ Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true  }}
    >
            {data.map(item => <SwiperSlide key={item.id}><EventSectionItems {...item} /></SwiperSlide> )}
    </Swiper>
        </div>
        
        </>
    )
}
export default EventSection;