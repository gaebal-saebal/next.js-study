import React from 'react';
import { connectDB } from '@/util/database';
import ListItem from './ListItem';

const List = async () => {
  const db = (await connectDB).db('forum');
  const lists = await db.collection('post').find().toArray();

  const items = lists.map((list) => {
    return {
      _id: list._id.toString(),
      title: list.title,
      content: list.content,
    };
  });

  return (
    <div className='list-bg'>
      <ListItem lists={items} />
    </div>
  );
};

export default List;
