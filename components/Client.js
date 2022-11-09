import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import image1 from '../assets/img/client-1.png';
import image2 from '../assets/img/client-2.png';
import image3 from '../assets/img/client-3.png';
import image4 from '../assets/img/client-4.png';
import image5 from '../assets/img/client-5.png';
import image6 from '../assets/img/client-6.png';
import image7 from '../assets/img/client-7.png';
import Image from "next/image";
import 'swiper/css';

function Client() {
  return (
    <>
      <div className="sm:container sm:pl-auto pl-4">
      <Swiper
            spaceBetween={50}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            modules={[Autoplay]}
            breakpoints={{
              320: {
                leftSlides: true,
                slidesPerView: 2.5,
                freeMode: true,
                grabCursor: true,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 5,
              },
              1024: {
                slidesPerView: 7,
              },
            }}
          >
            <SwiperSlide>
              <div className="rounded-[24px] transition-all duration-300 cursor-pointer group">
                <Image className="block w-[100%] h-[100%]" src={image1} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-[24px] transition-all duration-300 cursor-pointer group">
                <Image className="block w-[100%] h-[100%]" src={image2} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-[24px] transition-all duration-300 cursor-pointer group">
                <Image className="block w-[100%] h-[100%]" src={image3} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-[24px] transition-all duration-300 cursor-pointer group">
                <Image className="block w-[100%] h-[100%]" src={image4} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-[24px] transition-all duration-300 cursor-pointer group">
                <Image className="block w-[100%] h-[100%]" src={image5} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-[24px] transition-all duration-300 cursor-pointer group">
                <Image className="block w-[100%] h-[100%]" src={image6} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-[24px] transition-all duration-300 cursor-pointer group">
                <Image className="block w-[100%] h-[100%]" src={image7} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-[24px] transition-all duration-300 cursor-pointer group">
                <Image className="block w-[100%] h-[100%]" src={image1} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-[24px] transition-all duration-300 cursor-pointer group">
                <Image className="block w-[100%] h-[100%]" src={image2} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-[24px] transition-all duration-300 cursor-pointer group">
                <Image className="block w-[100%] h-[100%]" src={image3} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-[24px] transition-all duration-300 cursor-pointer group">
                <Image className="block w-[100%] h-[100%]" src={image4} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-[24px] transition-all duration-300 cursor-pointer group">
                <Image className="block w-[100%] h-[100%]" src={image5} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-[24px] transition-all duration-300 cursor-pointer group">
                <Image className="block w-[100%] h-[100%]" src={image6} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-[24px] transition-all duration-300 cursor-pointer group">
                <Image className="block w-[100%] h-[100%]" src={image7} alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
      </div>
    </>
  );
}

export default Client;
