import React from 'react'
import FoodCard from '../../../component/FoodCard/FoodCard'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

import { Pagination } from 'swiper/modules';


const OrderTab = ({ items }) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
    return (

        <Swiper
            pagination={pagination}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className='grid md:grid-cols-3 gap-3'>
                    {
                        items.slice(0,6).map(item => {
                            return <FoodCard key={item._id} item={item} />
                        })
                    }
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='grid md:grid-cols-3 gap-3'>
                    {
                        items.slice(6,12).map(item => {
                            return <FoodCard key={item._id} item={item} />
                        })
                    }
                </div>
            </SwiperSlide>

        </Swiper>
    )
}

export default OrderTab