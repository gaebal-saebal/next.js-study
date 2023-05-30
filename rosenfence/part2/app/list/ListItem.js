'use client';
import React from 'react';
import Link from 'next/link';

const ListItem = ({ lists }) => {
  const handleDelete = (list) => {
    fetch('/api/delete', { method: 'DELETE', body: list._id }).then(() => {
      console.log('삭제됨');
    });
  };

  return (
    <div>
      {lists.map((list, i) => {
        return (
          <div key={i}>
            <div className='list-item'>
              <Link className='link' href={`/detail/${list._id}`}>
                <h4>{list.title}</h4>
                <p>{list.content}</p>
              </Link>
              <Link className='link' href={`/edit/${list._id}`}>
                수정
              </Link>
              <span onClick={() => handleDelete(list)}>삭제</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListItem;
