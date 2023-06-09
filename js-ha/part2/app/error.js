'use client';

export default function Error({ error, reset }) {
  return (
    <div>
      <h4>에러났어요ㅜㅜ</h4>
      <button
        onClick={() => {
          reset();
        }}
      >
        재시도
      </button>
    </div>
  );
}
