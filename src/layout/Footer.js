import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
  return (
    <footer>
      {/* 하단 푸터 영역 */}
      <div className='not'></div>

      <div>
        <div className='fnav'>
          <nav>
            <ul>
              <li><Link to='/persinfo' title='개인정보처리방침'>개인정보처리방침</Link></li>
              <li><Link to='/manual' title='쇼핑몰약관'>쇼핑몰약관</Link></li>
            </ul>
          </nav>

          <div className='sns_img'>
            <Link to='https://www.instagram.com/ginipet/' title='인스타그램'>
              <img src={`${process.env.PUBLIC_URL}/images/footer_sns_2.gif`} alt='인스타그램 로고'></img>
            </Link>
          </div>
        </div>

        <address>
          <p>고객센터</p>
          <span>02-2166-7770</span>
          <p>평일 10:00&#126;17:00</p>
          <p>&#40;점심: 12:00&#126;13:00&#41;</p>
        </address>

        <div className='busi_info'>지니펫 사업자 정보 확인</div>
      </div>
    </footer>
  );
}

export default Footer;