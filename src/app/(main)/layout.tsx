import React from 'react';
import Link from 'next/link';

interface MainLayoutProps {
  children: React.ReactNode;
}


// 헤더
const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full items-center border-b bg-background/95 backdrop-blur">
      <div className="flex items-center justify-center p-4 gap-10">
        <a href="/" className="text-2xl font-bold">
          아이돌
        </a>
        <a href="/" className="text-2xl font-bold">
          드라마
        </a>
        <a href="/" className="text-2xl font-bold">
          애니메이션
        </a>
        <a href="/" className="text-2xl font-bold">
          음식
        </a>
        <a href="/" className="text-2xl font-bold">
          스포츠
        </a>
        <a href="/" className="text-2xl font-bold">
          국가
        </a>
        <a href="/" className="text-2xl font-bold">
          유머
        </a>

      </div>
    </header>
  );
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        {children}
      </main>
    </div>
  );
} 