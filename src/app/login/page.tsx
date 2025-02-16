'use client';

import { Button } from '@/components/ui/button';
import { signIn } from 'next-auth/react';
import Image from 'next/image';

export default function Page() {
  const handleKakaoLogin = () => {
    signIn('kakao');
  };

  return (
    <div className="flex flex-col items-center justify-start h-screen space-y-4">
      <Image src="/2953982.jpg" alt="logo" width={700} height={700} />
      <Button
        onClick={handleKakaoLogin}
        className="flex items-center justify-center bg-yellow-400 text-black font-bold py-2 px-6 rounded-lg w-1/4">
        카카오로 로그인하기
      </Button>
    </div>
  );
}
