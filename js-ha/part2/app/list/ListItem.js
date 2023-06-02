'use client';

import Link from 'next/link';

// TODO : 본인이 아니어도 삭제하면 지워지지는 않지만 fetch가 실행되니까 일단 지워지는건 작동을 함.
// 이걸 삼항연산자로 본인이면 지워지고 아니면 그대로 있게끔? 만들면 되지 않을까?
//! hint : 서버로부터 받는 data를 확인해보세요

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
                    //! hint : 여기에 console.log(data)를 하면, pages/api/post/delete 에서 보내는 응답을 받을 수 있을거에요
                    //! '삭제완료'를 받으면 애니메이션을 실행하고, 아닌 경우엔 그냥 놔둔다면?
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
