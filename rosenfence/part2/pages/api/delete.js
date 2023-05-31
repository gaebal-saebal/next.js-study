import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

export default async function write(req, res) {
  if (req.method === 'DELETE') {
    const db = (await connectDB).db('forum');
    const deleter = await db.collection('post').deleteOne({ _id: new ObjectId(req.body) });
    return res.status(200).redirect('/list');
  }
}
