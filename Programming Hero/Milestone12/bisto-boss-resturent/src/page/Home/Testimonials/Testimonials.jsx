import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../component/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'


const Testimonials = () => {
    const [reviews, setReviews] = useState();

    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])

    return (
        <section className='my-5'>
            <SectionTitle>
                subHeading = "What our client says"
                heading='Testimonial'
            </SectionTitle>
            <Swiper
                pagination={{
                    type: "progressbar",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                {/* {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className=' flex flex-col items-center my-16 mx-24 '>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p>
                                {review.details}
                            </p>
                            <h3 className='text-2xl text-orange-400'>{review.name}</h3>


                        </div>
                    </SwiperSlide>)
                } */}
            </Swiper>
        </section>
    );
};

export default Testimonials;