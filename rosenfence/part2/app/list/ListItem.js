'use client';
import React from 'react';
import Link from 'next/link';

export default function ListItem({ lists }) {
  const handleDelete = (list, e) => {
    fetch('/api/delete', {
      method: 'DELETE',
      body: JSON.stringify({ _id: list._id, author: list.author }), //!
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // 삭제완료 response를 받았을 때에만 애니메이션 구현
        if (data === '삭제완료') {
          e.target.parentElement.style.opacity = 0;
          setTimeout(() => {
            e.target.parentElement.style.display = 'none';
          }, 1000);
        }
      })
      .catch(() => {
        console.log('오류');
      });
  };

  return (
    <div>
      {lists.map((list, i) => {
        return (
          <div className='list-item' key={i}>
            <Link className='link' href={`/detail/${list._id}`}>
              <h4>{list.title}</h4>
              <p>{list.name}</p>
            </Link>
            <Link className='link' href={`/edit/${list._id}`}>
              수정
            </Link>
            <span onClick={(e) => handleDelete(list, e)}>삭제</span>
          </div>
        );
      })}
    </div>
  );
}
