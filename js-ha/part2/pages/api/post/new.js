import { connectDB } from '@/util/database';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';

export default async function handler(요청, 응답) {
  let info = await getServerSession(요청, 응답, authOptions);
  console.log(info.user.email);
  if (info) {
    요청.body.author = info.user.email;
  }
  console.log(요청.body);

  if (요청.method === 'POST') {
    if (요청.body.title === '') {
      return 응답.status(500).json('제목을 입력해주세요');
    }
    try {
      // DB에러 예외처리(try, catch)
      // else문으로 쓸 필요 없음, return문이 존재하니까
      const client = await connectDB;
      const db = client.db('forum');
      let result = await db.collection('post').insertOne(요청.body);
      응답.redirect(302, '/list');
    } catch (error) {
      console.log('에러발생');
    }
  }
}
