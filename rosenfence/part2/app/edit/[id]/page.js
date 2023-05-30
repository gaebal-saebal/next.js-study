import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';
import React from 'react';

const Edit = async (props) => {
  const db = (await connectDB).db('forum');
  const post = await db.collection('post').findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div className='p-20'>
      <h4>글수정</h4>
      <form action='/api/post/edit' method='POST'>
        <input name='title' placeholder='글제목' defaultValue={post.title} />
        <input name='content' placeholder='글내용' defaultValue={post.content} />
        <input name='_id' defaultValue={post._id.toString()} style={{ display: 'none' }} />
        <button type='submit'>전송</button>
      </form>
    </div>
  );
};

export default Edit;
