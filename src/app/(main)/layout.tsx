import React from 'react';
import Link from 'next/link';

interface MainLayoutProps {
  children: React.ReactNode;
}

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-xl font-bold">로고</Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="/" className="hover:text-blue-600 transition-colors">홈</Link>
            <Link href="/about" className="hover:text-blue-600 transition-colors">소개</Link>
            <Link href="/contact" className="hover:text-blue-600 transition-colors">연락처</Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/login" className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
            로그인
          </Link>
          <Link href="/register" className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">
            회원가입
          </Link>
        </div>
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