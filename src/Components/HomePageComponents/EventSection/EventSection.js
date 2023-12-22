import './EventSection.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import useGetAxios from '../../../hooks/hookGetAxios/useGetAxios';
import EventSectionItems from './EventSectionItems/EventSectionItems';

function EventSection(){
    const data = useGetAxios('http://localhost:5000/eventitems')
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