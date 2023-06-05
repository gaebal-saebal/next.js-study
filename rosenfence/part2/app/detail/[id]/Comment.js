'use client';
import React, { useState } from 'react';

const Comment = ({ postId }) => {
  const [comment, setComment] = useState('');

  const handleClick = () => {
    fetch('/api/post/comment', {
      method: 'POST',
      body: JSON.stringify({ content: comment, parent: postId }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch(() => {
        console.log('오류발생');
      });
  };

  return (
    <div>
      <div>댓글목록보여줄부분</div>
      <input
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <button onClick={handleClick}>댓글전송</button>
    </div>
  );
};

export default Comment;
