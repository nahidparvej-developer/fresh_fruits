import React, { useEffect, useState } from 'react'
import ScetionTitle from '../../../Componet/ScetionTitle'
import { Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const Testimonials = () => {

    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className='my-20'>



            <ScetionTitle
                subheading='what our say'
                heading={'Testimonials'}
            ></ScetionTitle>


            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide
                    >
                        <div className='flex flex-col items-center m-20 '>

                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p className='my-5'>{review.details}</p>
                            <h3 className='text-2xl text-yellow-500 text-center mt-3'>{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>

        </section>
    )
}

export default Testimonials
