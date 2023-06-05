import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';
import React from 'react';
import Comment from './Comment';

const Detail = async (props) => {
  const db = (await connectDB).db('forum');
  const post = await db.collection('post').findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div>
      <h4>상세페이지</h4>
      <h4>{post.title}</h4>
      <p>{post.content}</p>
      <Comment postId={props.params.id} />
    </div>
  );
};

export default Detail;
