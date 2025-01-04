import React from 'react'
import FoodeCard from '../../../Componet/FoodCard/FoodeCard';

import { Swiper, SwiperSlide } from "swiper/react";
// import {Pagination} from 'swiper';
import "swiper/css";
import "swiper/css/pagination";


const OrderTab = ({ items }) => {

    const pagination = {
        "clickable": true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        }
    }


    return (
        <div >


            <Swiper
                pagination={pagination}
                // modules={[Pagination]}
                className="mySwiper"
                >

                <SwiperSlide>
                    <div className='grid md:grid-cols-3 gap-10 my-10'>
                        {
                            items.map(item => <FoodeCard
                                item={item}></FoodeCard>)
                        }
                    </div>

                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default OrderTab
