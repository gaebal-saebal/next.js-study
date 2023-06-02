'use client';

import Link from 'next/link';

export default function ListItem({ result }) {
  return (
    <div>
      {result.map((a, i) => {
        return (
          <div className='list-item' key={i}>
            <Link prefetch={false} href={`/detail/${a._id}`}>
              <h4>{a.title}</h4>
            </Link>
            <Link href={`/edit/${a._id}`}> ✏️ </Link>
            <span
              onClick={(e) => {
                fetch('/api/post/delete', { method: 'DELETE', body: a._id })
                  .then((data) => {
                    return data.json();
                  })
                  .then((data) => {
                    e.target.parentElement.style.opacity = 0;
                    setTimeout(() => {
                      e.target.parentElement.style.display = 'none';
                    }, 1000);
                  });
                // fetch('/api/abe/ha');
              }}
            >
              ❌
            </span>
            <p>1월 1일</p>
          </div>
        );
      })}
    </div>
  );
}
