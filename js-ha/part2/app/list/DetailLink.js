'use client';

import { usePathname, useRouter } from 'next/navigation';

export default function DetailLink() {
  let router = useRouter();
  let a = usePathname();
  console.log(a); // "/list"
  return (
    <button
      onClick={() => {
        router.push('/'); // 여러가지 기능이 있어서 link태그 안 쓰고 요고 씀(useRouter)
      }}
    >
      버튼
    </button>
  );
}
