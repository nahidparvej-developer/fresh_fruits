
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
                    <div className='border-0 border-inherit shadow-2xl'>
                        <img className='w-[260px] h-[360px] bg-cover' src="/src/assets/home/pepe.webp" alt="" />
                        <h3 className='text-2xl shadow-black text-violet-700 uppercase -mt-10  text-center'>Paka Pepe</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='border-0 border-inherit  shadow-2xl'>
                        <img className='w-[260px] h-[360px] bg-cover' src="/src/assets/home/apple-1.webp" alt="" />
                        <h3 className='text-2xl shadow-black uppercase -mt-10 text-black text-center'>Apple</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='border-0 border-inherit shadow-2xl'>
                        <img className='w-[260px] h-[360px] bg-cover' src="/src/assets/home/tormuj.webp" alt="" />
                        <h3 className='text-2xl shadow-black uppercase -mt-10 text-black text-center'>Tormuj</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='border-0 border-inherit  shadow-2xl'>
                        <img className='w-[260px] h-[360px] bg-cover' src="/src/assets/home/guava-1.webp" alt="" />
                        <h3 className='text-2xl shadow-black uppercase -mt-10 text-black  text-center'>Gouava</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='border-0 border-inherit shadow-2xl'>
                        <img className='w-[260px] h-[360px] bg-cover' src="/src/assets/home/angur.webp" alt="" />
                        <h3 className='text-2xl shadow-black uppercase -mt-10 text-black  text-center'>Angur</h3>
                    </div>
                </SwiperSlide>


            </Swiper>
        </section>


    );
};

export default Catagory;