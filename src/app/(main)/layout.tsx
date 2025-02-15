"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SearchIcon } from 'lucide-react';

interface MainLayoutProps {
  children: React.ReactNode;
}

const NAVIGATION_ITEMS = [
  { name: '아이돌', href: '/idol' },
  { name: '드라마', href: '/drama' },
  { name: '애니메이션', href: '/animation' },
  { name: '음식', href: '/food' },
  { name: '스포츠', href: '/sports' },
  { name: '국가', href: '/country' },
  { name: '유머', href: '/humor' },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur flex">
      <div className="flex flex-col items-center justify-between mx-auto px-4">
        {/* 검색 바 */}
        <div className="flex items-center justify-center rounded-md border-2 w-full shadow-md">
          <SearchIcon className="w-7 h-7 ml-4 mr-3" />
          <input
            type="text"
            className="w-full p-3 text-black text-2xl"
          />
        </div>
        {/* 네비게이션 메뉴 (카테고리) */}
        <nav className="flex items-center justify-center overflow-x-auto">
          <ul className="flex items-center space-x-1 lg:space-x-6 py-4">
            {NAVIGATION_ITEMS.map((item) => (
              <li key={item.name}> 
                <Link
                  href={item.href}
                  className={`
                    px-3 py-2 mx-6 text-2xl font-medium rounded-md 
                    transition-colors duration-200
                    ${pathname === item.href
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-100'
                    }
                  `}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-4">
        {children}
      </main>
    </div>
  );
} 