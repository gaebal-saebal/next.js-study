import { connectDB } from '@/util/database';
import bcrypt from 'bcrypt';

export default async function signUp(req, res) {
  const db = (await connectDB).db('forum');
  // db에서 req로 보낸 email과 동일 email 있는지 확인(없으면 null)
  const isAlreadySigned = await db.collection('user_cred').findOne({ email: req.body.email });

  if (req.method === 'POST') {
    // 이름,이메일,패스워드 중 하나라도 빈칸이면 400
    if (req.body.name === '' || req.body.email === '' || req.body.password === '') {
      return res.status(400).json('400 bad request');
      // email 중복되면 409
    } else if (isAlreadySigned) {
      return res.status(409).json('409 conflict');
    } else {
      let hash = await bcrypt.hash(req.body.password, 10);
      req.body.password = hash;
      const db = (await connectDB).db('forum');
      const register = await db.collection('user_cred').insertOne(req.body);
      return res.status(200).redirect('/');
    }
  }
}
