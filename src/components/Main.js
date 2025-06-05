import React from 'react';
import Slide from './Slide';
import Shopping from './Shopping';
import Story from './Story';
import Insta from './Insta';

import '../styles/slide.css';
import '../styles/shopping.css';
import '../styles/story.css';
import '../styles/insta.css';

function Main(props) {
  return (
    <main>
      {/* 메인 영역 */}

      <Slide />
      <Shopping />
      <Story />
      <Insta />
    </main>
  );
}

export default Main;