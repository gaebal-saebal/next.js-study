import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function edit(req, res) {
  if (req.method === 'POST') {
    if (req.body.title !== '') {
      if (req.body.content !== '') {
        const post = req.body;
        const set = {
          title: post.title,
          content: post.content,
        };
        const db = (await connectDB).db('forum');
        const edit = await db
          .collection('post')
          .updateOne({ _id: new ObjectId(post._id) }, { $set: set });
        return res.status(200).redirect('/list');
      }
    }
    return res.status(500).json('내용이 없습니다');
  }
  return res.status(500).json('제목이 없습니다');
}
