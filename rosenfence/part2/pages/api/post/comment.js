import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]';
import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function comment(req, res) {
  let session = await getServerSession(req, res, authOptions);
  if (req.method === 'POST') {
    if (session) {
      // 로그인 했을 경우에만
      let request = JSON.parse(req.body);
      if (request.content !== '') {
        // 댓글내용이 빈칸이면 500
        request.parent = new ObjectId(request.parent);
        request.author = session.user.email;
        request.name = session.user.name;
        const db = (await connectDB).db('forum');
        const comment = await db.collection('comment').insertOne(request);
        return res.status(200).json('댓글 작성완료');
      }
      return res.status(500).json('내용이 없습니다');
    }
    return res.status(400).json('로그인이 필요합니다');
  }
}
