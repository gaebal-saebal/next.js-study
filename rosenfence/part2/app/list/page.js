import React from 'react';
import { connectDB } from '@/util/database';
import Link from 'next/link';

const List = async () => {
  const db = (await connectDB).db('forum');
  const lists = await db.collection('post').find().toArray(); // 데이터 가져오기

  return (
    <div className='list-bg'>
      {lists.map((list, i) => {
        return (
          <Link className='link' href={`detail/${list._id}`} key={i}>
            <div className='list-item'>
              <h4>{list.title}</h4>
              <p>{list.content}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default List;
