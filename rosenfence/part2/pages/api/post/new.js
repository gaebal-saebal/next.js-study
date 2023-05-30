import { connectDB } from '@/util/database';

export default async function write(req, res) {
  if (req.method === 'POST') {
    if (req.body.title !== '') {
      if (req.body.content !== '') {
        const db = (await connectDB).db('forum');
        const write = await db.collection('post').insertOne(req.body);
        return res.status(200).redirect('/list');
      }
      return res.status(500).json('내용이 없습니다');
    }
    return res.status(500).json('제목이 없습니다');
  }
}
