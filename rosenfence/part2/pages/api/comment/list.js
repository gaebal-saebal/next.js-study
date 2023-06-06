import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function list(req, res) {
  if (req.method === 'POST') {
    const db = (await connectDB).db('forum');
    const comments = await db
      .collection('comment')
      .find({ parent: new ObjectId(req.body) })
      .toArray();
    res.status(200).json(comments);
  }
}
