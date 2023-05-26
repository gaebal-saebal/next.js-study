import { connectDB } from '@/util/database';

export default async function Home() {
  const db = (await connectDB).db('forum');
  const result = await db.collection('post').find().toArray(); // 데이터 가져오기

  return <div>안녕?</div>;
}
