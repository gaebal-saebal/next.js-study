import { connectDB } from '@/util/database';

export default async function handler(요청, 응답) {
  if (요청.method === 'POST') {
    if (요청.body.id === '') {
      return 응답.status(500).json('아이디를 입력해주세요');
    }
    if (요청.body.password === '') {
      return 응답.status(500).json('비밀번호를 입력해주세요');
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
