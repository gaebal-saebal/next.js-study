'use client';
import React, { useEffect, useState } from 'react';

const Comment = ({ postId }) => {
  const [comment, setComment] = useState('');
  const [lists, setLists] = useState([]);

  useEffect(() => {
    fetch('/api/comment/list', { method: 'POST', body: postId })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLists(data);
      });
  }, []);

  const handleClick = () => {
    fetch('/api/comment/new', {
      method: 'POST',
      body: JSON.stringify({ content: comment, parent: postId }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLists(data);
      })
      .catch(() => {
        console.log('오류발생');
      });
  };

  return (
    <div>
      <div>
        {lists.map((list, i) => {
          return (
            <div key={i}>
              <span>{list.content}</span>
              <span>{list.author}</span>
            </div>
          );
        })}
      </div>
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
