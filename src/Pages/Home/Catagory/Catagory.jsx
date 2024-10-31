
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import ScetionTitle from '../../../Componet/ScetionTitle';




const Catagory = () => {
    return (

        <section>
            <ScetionTitle
                subheading={" 10pm to 9am"}
                heading={"order online"}
            ></ScetionTitle>

            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-16"
            >
                <SwiperSlide>
                    <img src="/src/assets/home/slide1.jpg" alt="" />
                    <h3 className='text-2xl shadow-black uppercase -mt-10 text-white text-center'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/src/assets/home/slide2.jpg" alt="" />
                    <h3 className='text-2xl shadow-black uppercase -mt-10 text-white text-center'>pizza</h3></SwiperSlide>
                <SwiperSlide>
                    <img src="/src/assets/home/slide3.jpg" alt="" />
                    <h3 className='text-2xl shadow-black uppercase -mt-10 text-white text-center'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/src/assets/home/slide4.jpg" alt="" />
                    <h3 className='text-2xl shadow-black uppercase -mt-10 text-white text-center'>cake</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/src/assets/home/slide5.jpg" alt="" />
                    <h3 className='text-2xl shadow-black uppercase -mt-10 text-white text-center'>Salads</h3>
                </SwiperSlide>


            </Swiper>
        </section>


    );
};

export default Catagory;