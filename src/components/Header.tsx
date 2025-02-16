import Link from 'next/link';
import {User} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {useEffect, useState} from 'react';
import {TOKEN_KEY} from './constants/key';

export function Header() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem(TOKEN_KEY);
    setToken(null);
    setToken(token);
  }, []);

  return (
    <header className="top-0 z-50 w-full items-center backdrop-blur flex flex-row justify-center">
      <div className="flex-1 flex items-center justify-start p-4 my-7"></div>

      <div className="flex items-center justify-center p-4 my-7">
        <Link href="/">
          <span className="font-extrabold text-6xl">얼마나 아세요?</span>
        </Link>
      </div>

      <div className="flex-1 flex items-center justify-end p-4 my-7">
        {token ? (
          <Link href="/profile">
            <User className="w-10 h-10 text-gray-700 mr-4" />{' '}
          </Link>
        ) : (
          <Link href="/login">
            <Button className="px-6 py-3 text-lg">로그인</Button>{' '}
          </Link>
        )}
      </div>
    </header>
  );
}
