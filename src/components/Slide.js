import React from 'react';
// Swiper Slide
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Slide() {
  return (
    <section className='main_slide'>
      <Swiper modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        loop={true}
        className='main_slide_inner'>
        <SwiperSlide>
          <div className='ma_slide ma_slide1'>
              <img src={`${process.env.PUBLIC_URL}/images/mo_bg_01.jpg`} alt='슬라이드1 배경'></img>
              <img src={`${process.env.PUBLIC_URL}/images/mo_txt_01.png`} alt='슬라이드1 텍스트'></img>
            </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='ma_slide ma_slide2'>
            <img src={`${process.env.PUBLIC_URL}/images/mo_bg_full_23.png`} alt='슬라이드2 배경'></img>
            <img src={`${process.env.PUBLIC_URL}/images/mo_bg_23.png`} alt='슬라이드2 애견'></img>
            <img src={`${process.env.PUBLIC_URL}/images/mo_txt_23.png`} alt='슬라이드2 텍스트'></img>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Slide;

// Swiper Slide 홈페이지 : https://swiperjs.com/
// GPT 도움: useEffect 사용!