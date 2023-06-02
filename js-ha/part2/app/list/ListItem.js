'use client';

import Link from 'next/link';

// TODO : 본인이 아니어도 삭제하면 지워지지는 않지만 fetch가 실행되니까 일단 지워지는건 작동을 함.
// 이걸 삼항연산자로 본인이면 지워지고 아니면 그대로 있게끔? 만들면 되지 않을까?

export default async function ListItem({ result }) {
  return (
    <div>
      {result.map((a, i) => {
        return (
          <div className='list-item' key={i}>
            <Link prefetch={false} href={`/detail/${a._id}`}>
              <h4>{a.title}</h4>
            </Link>
            <Link href={`/edit/${a._id}`}> ✏️ </Link>
            {}
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
