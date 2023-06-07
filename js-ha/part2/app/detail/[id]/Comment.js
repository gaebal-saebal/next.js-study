'use client';

import { useEffect, useState } from 'react';

export default function Comment({ _id }) {
  const [comment, setComment] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`/api/comment/list?id=${_id}`)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, []);
  console.log(data);
  return (
    <div>
      <hr />
      <div>
        {data.length > 0
          ? data.map((a, i) => {
              return (
                <div key={i}>
                  {a.content} {a.author}
                </div>
              );
            })
          : '댓글이 없어요'}
      </div>
      <input onChange={(e) => setComment(e.target.value)} />
      <button
        onClick={(e) => {
          fetch('/api/comment/new', {
            method: 'POST',
            body: JSON.stringify({ comment: comment, _id: _id }),
          })
            .then((res) => res.json())
            .then((data) => {
              setData(data);
              setComment('');
              e.target.parentNode.children[2].value = ''; // 내가 입력한 value 나올 때 까지 (e)
            });
        }}
      >
        댓글전송
      </button>
    </div>
  );
}
