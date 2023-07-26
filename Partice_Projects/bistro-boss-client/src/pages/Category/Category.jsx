import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slider1 from '../../assets/home/slide1.jpg'
import slider2 from '../../assets/home/slide2.jpg'
import slider3 from '../../assets/home/slide3.jpg'
import slider4 from '../../assets/home/slide4.jpg'
import slider5 from '../../assets/home/slide5.jpg'
import SectionTitle from '../../component/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <section>
            <SectionTitle
            subHeading={"From 11.00am to 10.00pm"}
            heading={"Order Online"}
            />
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-12"
            >
                <SwiperSlide>
                    <img src={slider1} alt="" srcset="" />
                    <h2 className='text-4xl uppercase text-center text-white -mt-16'>Salad</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider2} alt="" srcset="" />
                    <h2 className='text-4xl uppercase text-center text-white -mt-16'>Pizza</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider3} alt="" srcset="" />
                    <h2 className='text-4xl uppercase text-center text-white -mt-16'>Soup</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider4} alt="" srcset="" />
                    <h2 className='text-4xl uppercase text-center text-white -mt-16'>Desert</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slider5} alt="" srcset="" />
                    <h2 className='text-4xl uppercase text-center text-white -mt-16'>Vegetable</h2>
                </SwiperSlide>


            </Swiper>

        </section>
    );
};

export default Category;