import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../component/SectionTitle/SectionTitle';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

// import required modules
import { Navigation } from 'swiper/modules';

const Testomonial = () => {

    const [reviews, setReview] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/review")
            .then(res => res.json())
            .then(data => {
                setReview(data)
            })
    }, [])

    return (
        <div>
            <SectionTitle
                subHeading="What our client say"
                heading={"Testimonials"}
            />

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className='flex flex-col items-center mt-8 mb-6'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p className='py-8'>{review.details}</p>
                            <h3 className="text-2xl text-orange-400">{review.name}</h3>
                        </div>

                    </SwiperSlide>)
                }



            </Swiper>
        </div>
    );
};

export default Testomonial;