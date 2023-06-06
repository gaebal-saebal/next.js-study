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

  const handleClick = (e) => {
    if (comment.length > 0) {
      fetch('/api/comment/new', {
        method: 'POST',
        body: JSON.stringify({ content: comment, parent: postId }),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setLists(data);
          e.target.parentElement.children[1].value = '';
          setComment('');
        })
        .catch(() => {
          console.log('오류발생');
        });
    } else {
      alert('댓글에 뭐라도 적어주세요');
    }
  };

  return (
    <div>
      <div>
        {lists.length > 0
          ? lists.map((list, i) => {
              return (
                <div key={i}>
                  <span>{list.content}</span>
                  <span>{list.author}</span>
                </div>
              );
            })
          : null}
      </div>
      <input
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <button onClick={(e) => handleClick(e)}>댓글전송</button>
    </div>
  );
};

export default Comment;
