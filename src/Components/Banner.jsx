import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';


// import required modules
import { Autoplay, EffectFade } from 'swiper/modules';
import { CiLocationArrow1 } from 'react-icons/ci';

const Banner = () => {
    return (
        <Swiper
        effect={"fade"}
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='md:h-[500px] h-auto bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url("banner3.jpg")] bg-cover bg-no-repeat bg-center relative'>
                <div className='flex justify-center items-center '>
                        <div className='space-y-3 absolute inset-0 flex flex-col justify-center items-center  mx-auto   text-white h-full py-12 w-3/4'>
                                <h3 className='font-dancing text-lg md:text-5xl font-bold text-orange-600'>Crafting Artistry Through Fabric</h3>
                                <p className='text-center w-4/5 text-xl font-lato'>Embark on a journey through the vibrant world of Textile Arts, where every stitch tells a story. From intricate embroidery to cozy knitted creations.</p>
                                <button className='btn bg-orange-500 border-0 hover:bg-orange-600 text-white font-semibold'>Explore more <CiLocationArrow1 className='text-white font-bold'/></button>
                        </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='md:h-[500px] h-auto bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url("banner2.jpg")] bg-cover bg-no-repeat bg-center relative'>
                <div className='flex justify-center items-center '>
                        <div className='space-y-3 absolute inset-0 flex flex-col justify-center items-center  mx-auto   text-white h-full py-12 w-3/4'>
                                <h3 className='font-dancing text-lg md:text-5xl font-bold text-orange-600'>Weaving Dreams into Reality</h3>
                                <p className='text-center w-4/5 text-xl font-lato'>At Textile Tapestry, we believe in the power of imagination and the magic of creation. Whether you're a seasoned artisan or a novice enthusiast, let your creativity flourish as you delve into the enchanting world of macrame.</p>
                                <button className='btn bg-orange-500 border-0 hover:bg-orange-600 text-white font-semibold'>Explore more <CiLocationArrow1 className='text-white font-bold'/></button>
                        </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='md:h-[500px] h-auto bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url("banner1.jpg")] bg-cover bg-no-repeat bg-center relative'>
                <div className='flex justify-center items-center '>
                        <div className='space-y-3 absolute inset-0 flex flex-col justify-center items-center  mx-auto   text-white h-full py-12 w-3/4'>
                                <h3 className='font-dancing text-lg md:text-5xl font-bold text-orange-600'>Crafting Artistry Through Fabric</h3>
                                <p className='text-center w-4/5 text-xl font-lato'>Embark on a journey through the vibrant world of Textile Arts, where every stitch tells a story. From intricate embroidery to cozy knitted creations.</p>
                                <button className='btn bg-orange-500 border-0 hover:bg-orange-600 text-white font-semibold'>Explore more <CiLocationArrow1 className='text-white font-bold'/></button>
                        </div>
                </div>
            </div>
        </SwiperSlide>
        
        
      </Swiper>
    );
};

export default Banner;