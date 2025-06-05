import React from 'react';
import { Link } from 'react-router-dom';
// Swiper Slide
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// 목록
const products = [
  {
    image: `${process.env.PUBLIC_URL}/images/172126109952400.jpg`,
    category: '[사료] 홀리스틱',
    name: '홍삼&국내산오리(1.2kg)',
    price: '24000'
  },
  {
    image: `${process.env.PUBLIC_URL}/images/172126104716100.jpg`,
    category: '[사료] 홀리스틱',
    name: '홍삼&호주산양고기(1.2kg)',
    price: '24000'
  },
  {
    image: `${process.env.PUBLIC_URL}/images/172126104716100.jpg`,
    category: '[사료] 홀리스틱',
    name: '홍삼&신선한연어(1.20kg)',
    price: '24000'
  },
  {
    image: `${process.env.PUBLIC_URL}/images/172126158801600.jpg`,
    category: '[사료] 유기농',
    name: '유기농&균형과조화(1kg)',
    price: '22000'
  },
  {
    image: `${process.env.PUBLIC_URL}/images/173992392350300.jpg`,
    category: '[사료] 유기농',
    name: '[OR]유기농&활기찬일상(1kg)',
    price: '22000'
  },
  {
    image: `${process.env.PUBLIC_URL}/images/172126171644600.jpg`,
    category: '[사료] 오리지널',
    name: '홍삼넣은 연어와 닭고기 (1kg)',
    price: '18000'
  },
  {
    image: `${process.env.PUBLIC_URL}/images/173683337614400.jpg`,
    category: '[영양제] 더 케어',
    name: '더케어 관절&근육(120g)',
    price: '19000'
  },
  {
    image: `${process.env.PUBLIC_URL}/images/172967040563900.jpg`,
    category: '[간식] 더스낵',
    name: '홍삼함유연어맛저키(80g)',
    price: '5000'
  },
];

function Shopping(props) {
  return (
    <section className='m_cont shopping'>
      <h2>
        <img src={`${process.env.PUBLIC_URL}/images/title_shopping_icon.png`} alt='쇼핑 아이콘'></img>
        <span>지니펫 쇼핑</span>하러 가기
      </h2>
      <button type='button' className='move_page'>바로가기</button>

      <Swiper modules={[Autoplay]} autoplay={{delay: 5000, disableOnInteraction: false}} loop={true}
      className='shop_slide'>
        {products.map((product, idx) => (
          <SwiperSlide key={idx}>
            <div className='shop_slide_list'>
            <div className='left_side'>
              <Link to='/product' title='상품'>
                <img src={product.image} alt='상품'></img>
              </Link>
            </div>

            <div className='right_side'>
              <div className='info'>
                <p className='category'>&#40;{product.category}&#41;</p>
                <p className='item_name'>{product.name}</p>
                <p className='price'><span>{Number(product.price).toLocaleString()}</span>원</p>
              </div>
              
              <div className='icon_wrap'>
                <Link to='/' className='cart' title='담기'>
                  <button type='button'>
                    <img src={`${process.env.PUBLIC_URL}/images/icon_cart.png`} alt='장바구니'></img>
                  </button>
                </Link>
                <Link to='/' className='heart' title='찜하기'>
                  <button type='button'>
                    <img src={`${process.env.PUBLIC_URL}/images/icon_preview.png`} alt='찜하기'></img>
                  </button>
                </Link>
                <Link to='/' className='detail' title='상세보기'>
                  <button type='button'>
                    <img src={`${process.env.PUBLIC_URL}/images/icon_wish.png`} alt='상세보기'></img>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Shopping;