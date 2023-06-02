import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import React from 'react';
import LoginBtn from '../LoginBtn';

const Write = async () => {
  const session = await getServerSession(authOptions);

  // 로그인 안 되어 있으면 글쓰기창 안보여주기
  if (session === null) {
    return (
      <div>
        <div>로그인해주세요</div>
        <LoginBtn />
      </div>
    );
  } else {
    return (
      <div className='p-20'>
        <h4>글작성</h4>
        <form action='/api/post/new' method='POST'>
          <input name='title' placeholder='글제목' />
          <input name='content' placeholder='글내용' />
          <button type='submit'>전송</button>
        </form>
      </div>
    );
  }
};

export default Write;
