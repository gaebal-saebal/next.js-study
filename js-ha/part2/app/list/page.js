import { connectDB } from '@/util/database';
import Link from 'next/link';
import DetailLink from './DetailLink';

export default async function List() {
  const client = await connectDB;
  const db = client.db('forum');
  let result = await db.collection('post').find().toArray();
  console.log(result);

  return (
    <div className='list-bg'>
      {result.map((a, i) => {
        return (
          <div className='list-item' key={i}>
            <Link prefetch={false} href={`/detail/${a._id}`}>
              {a.title}
            </Link>
            <DetailLink />
            <p>1월 1일</p>
          </div>
        );
      })}
    </div>
  );
}
