'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

const DetailLink = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.refresh();
      }}
    >
      버튼
    </button>
  );
};

export default DetailLink;
