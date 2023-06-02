import { connectDB } from '@/util/database';

import ListItem from './ListItem';
import { ObjectId } from 'mongodb';

export default async function List() {
  const client = await connectDB;
  const db = client.db('forum');
  let result = await db.collection('post').find().toArray();

  console.log(result);

  // String(new ObjectId("abc")) === "abc"
  let post = result.map((a, i) => {
    return { _id: String(a._id), title: a.title, content: a.content };
  });
  console.log(post);
  return (
    <div className='list-bg'>
      <ListItem result={post} />
    </div>
  );
}
