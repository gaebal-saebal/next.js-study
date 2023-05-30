import { connectDB } from '@/util/database';

export default async function list(req, res) {
  const db = (await connectDB).db('forum');
  const lists = await db.collection('post').find().toArray();

  if (req.method === 'GET') {
    res.status(200).json(lists);
  }
}
