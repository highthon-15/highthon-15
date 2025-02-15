'use client'

import { useFetchQuizQuery } from '@/hooks/useQuizQuery';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

export default function QuizPage() {
  const router = useRouter();
  const pathname = usePathname();

  const quizId = Number(pathname.split('/').pop());

  const { data, error, isLoading } = useFetchQuizQuery(quizId);

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>Error: {error.message}</div>;

  const { quizResponse, similarQuizzes, myRanking, rankings } = data;

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col gap-8">
      {/* 퀴즈 제목과 평점 */}
      <div className="flex items-start gap-8">
        {/* 퀴즈 이미지 */}
        <div className="w-[500px] h-[500px] rounded-2xl overflow-hidden">
          <img src={quizResponse.thumbnail} alt="퀴즈 이미지" className="w-full h-full object-cover" />
        </div>
        
        {/* 퀴즈 정보 */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <h1 className="text-4xl font-bold">{quizResponse.title}</h1>
            <div className="flex items-center gap-1">
              <span className="text-2xl">★</span>
              <span className="text-2xl">{quizResponse.rating}</span>
            </div>
          </div>
          
          {/* 태그 */}
          <div className="flex gap-2">
            {quizResponse.tag.split(',').map((tag: any, index: any) => (
              <span key={index} className="px-4 py-2 rounded-full border border-gray-300">{tag}</span>
            ))}
          </div>
          
          {/* 설명 */}
          <p className="text-lg text-gray-700 mt-4">{quizResponse.explanation}</p>
          
          {/* 시작하기 버튼 */}
          <button onClick={() => router.push(`/question/1`)} className="w-full mt-8 px-8 py-4 bg-white text-black border-2 border-black rounded-xl text-xl font-bold hover:bg-gray-800 transition-colors">
            시작
          </button>
        </div>
      </div>

      {/* 비슷한 퀴즈 섹션 */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">비슷한 퀴즈</h2>
        <div className="grid grid-cols-3 gap-6">
          {similarQuizzes.map((quiz: any) => (
            <Link key={quiz.id} href={`/quiz/${quiz.id}`} className="flex gap-4 p-4 border rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-32 h-32 bg-gray-200 rounded-lg">
                <img src={quiz.thumbnail} alt="비슷한 퀴즈 이미지" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-xl font-bold">{quiz.title}</h3>
                <div className="flex items-center gap-1 mt-1">
                  <span>★</span>
                  <span>{quiz.rating}</span>
                </div>
                <div className="flex flex-row w-full h-full items-end">
                  <span className="mt-2 px-3 py-1 rounded-full border border-gray-300 w-fit">{quiz.tag}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
