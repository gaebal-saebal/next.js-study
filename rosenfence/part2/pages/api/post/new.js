import { connectDB } from '@/util/database';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';

export default async function write(req, res) {
  let session = await getServerSession(req, res, authOptions);
  if (req.method === 'POST') {
    if (req.body.title !== '') {
      // title이 빈칸이면 500
      if (req.body.content !== '') {
        // content가 빈칸이어도 500
        if (session) {
          // 로그인 했을 경우에만
          req.body.author = session.user.email; // body에 author 담기
          req.body.name = session.user.name; // body에 닉네임 담기
          const db = (await connectDB).db('forum');
          const write = await db.collection('post').insertOne(req.body);
          return res.status(200).redirect('/list');
        }
      }
      return res.status(500).json('내용이 없습니다');
    }
    return res.status(500).json('제목이 없습니다');
  }
}
