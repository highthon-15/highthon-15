'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SearchIcon } from 'lucide-react';
import { apiUrl } from '@/components/constants/config';

interface MainLayoutProps {
  children: React.ReactNode;
}

const Header = () => {
  const [categories, setCategories] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    fetch(`${apiUrl}/doc/tag`)
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('카테고리를 가져오는 중 오류가 발생했습니다:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>로딩 중...</div>;

  return (
    <header className="top-0 z-50 w-full bg-background/95 backdrop-blur flex">
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
            {Object.entries(categories).map(([key, value]) => (
              <li key={key}>
                <Link
                  href={`/${key.toLowerCase()}`}
                  className={`
                    px-3 py-2 mx-6 text-2xl font-medium rounded-md 
                    transition-colors duration-200
                    ${pathname === `/${key.toLowerCase()}`
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-100'
                    }
                  `}
                >
                  {value}
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
