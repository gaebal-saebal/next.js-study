import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';
import { authOptions } from '../auth/[...nextauth]';
import { getServerSession } from 'next-auth';

export default async function handler(요청, 응답) {
  if (요청.method === 'DELETE') {
    console.log(요청.body);
    let info = await getServerSession(요청, 응답, authOptions);

    try {
      let db = (await connectDB).db('forum');
      let result = await db.collection('post').findOne({ _id: new ObjectId(요청.body) });
      console.log(info);
      if (info === null) {
        console.log('로그인 해주세요');
      } else if (result.author === info.user.email) {
        await db.collection('post').deleteOne({ _id: new ObjectId(요청.body) });
        return 응답.status(200).json('삭제완료');
      } else {
        return 응답.status(500).json('작성자 불일치');
      }
    } catch (error) {
      console.log('에러발생ㅠㅠ');
    }
  }
}
