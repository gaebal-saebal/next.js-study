import { connectDB } from '@/util/database';
import bcrypt from 'bcrypt';

export default async function handler(요청, 응답) {
  let db = (await connectDB).db('forum');
  let already = await db.collection('user_cred').findOne({ email: 요청.body.email });

  if (요청.method === 'POST') {
    if (요청.body.name === '' || 요청.body.email === '' || 요청.body.password === '') {
      return 응답.status(400).json('빈칸을 확인해주세요');
    } else if (already) {
      return 응답.status(409).json('이미 가입되어 있는 이메일입니다');
    } else {
      let hash = await bcrypt.hash(요청.body.password, 10);
      요청.body.password = hash;
      let db = (await connectDB).db('forum');
      await db.collection('user_cred').insertOne(요청.body);
      return 응답.status(200).redirect('/list');
    }
  }
}
