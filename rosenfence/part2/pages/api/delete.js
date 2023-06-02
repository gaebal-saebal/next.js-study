import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';
import { getServerSession } from 'next-auth';
import { authOptions } from './auth/[...nextauth]';

export default async function deleteFunction(req, res) {
  let session = await getServerSession(req, res, authOptions);
  if (req.method === 'DELETE') {
    if (session) {
      let request = JSON.parse(req.body); //!
      const db = (await connectDB).db('forum');
      if (session.user.role === 'admin') {
        // 관리자 계정으로 삭제할 시 삭제
        const deleter = await db.collection('post').deleteOne({ _id: new ObjectId(request._id) });
        return res.status(200).json('삭제완료');
      } else if (request.author === session.user.email) {
        // 아니면 작성자 이메일 = 로그인 이메일 같을때 삭제
        const deleter = await db.collection('post').deleteOne({ _id: new ObjectId(request._id) });
        return res.status(200).json('삭제완료');
      } else {
        // 다 일치 안하면 삭제 거절
        return res.status(500).json('현재유저와 작성자 불일치');
      }
    }
  }
}
