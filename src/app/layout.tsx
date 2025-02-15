'use client';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import SessionWrapper from './SessionWrapper';
import { Header } from '@/components/Header';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { usePathname } from 'next/navigation';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  console.log(pathname);
  const showHeader = !pathname.startsWith('/quiz/question/');

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <QueryClientProvider client={queryClient}>
          {showHeader && <Header />}
          <SessionWrapper>{children}</SessionWrapper>
        </QueryClientProvider>
      </body>
    </html>
  );
}
