import React from 'react';
import { Link } from 'react-router-dom';

function Story(props) {
  return (
    <section className='m_cont story'>
      <h2>
        <img src={`${process.env.PUBLIC_URL}/images/banner_story_icon.png`} alt='쇼핑 아이콘'></img>
        지니펫<span>스토리</span>
      </h2>
      <p className='m_cont_ex'>
        소중한 반려견을 위한<br/>
        지니펫의 다양한 소식을 만나보세요!
      </p>
      
      <button type='button' className='move_page'>
        <Link to='/story' title='스토리 페이지'>자세히보기</Link>
      </button>


      <div className='ban_img'>
        <img src={`${process.env.PUBLIC_URL}/images/banner_story_img.png`} alt='스토리 이미지'></img>
      </div>
    </section>
  );
}

export default Story;