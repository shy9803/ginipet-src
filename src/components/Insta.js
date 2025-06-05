import React from 'react';
import { Link } from 'react-router-dom';

function Insta(props) {
  return (
    <section className='m_cont insta'>
      <h2>
        <img src={`${process.env.PUBLIC_URL}/images/title_instar_icon.png`} alt='인스타그램'></img>
        지니펫 <span>in 스타</span>
      </h2>
      <p className='m_cont_ex'>
        지니펫의 다양한 소식과 정보를 만나보세요
      </p>

      <div className='insta_cont'>
        <div className='recent'>
          <img src={`${process.env.PUBLIC_URL}/images/snsTitle_1.jpg`} alt='최근 게시물'></img>
          <Link to='https://www.instagram.com/ginipet/' title='지니펫 인스타그램 계정'>
            <img src={`${process.env.PUBLIC_URL}/images/1672300757689.jpg`} alt='게시물'></img>
          </Link>
        </div>
        <div className='best'>
          <img src={`${process.env.PUBLIC_URL}/images/snsTitle_2.jpg`} alt='베스트 게시물'></img>
          <Link to='https://www.instagram.com/p/CxNHt__SJYy/' title='지니펫 인스타그램 게시물'>
            <img src={`${process.env.PUBLIC_URL}/images/1692944142605.jpg`} alt='게시물'></img>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Insta;