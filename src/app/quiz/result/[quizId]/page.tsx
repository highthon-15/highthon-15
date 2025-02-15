'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RankingRow } from '@/components/quiz/RankingRow';
import { CommentSection } from '@/components/quiz/CommentSection';
import { rankingData, myRank, nearbyRanks, comments } from '@/data/quizData';
import { useQuizResultQuery } from '@/hooks/useQuizResultQuery';
import { usePathname } from 'next/navigation';


export default function QuizResultPage() {
  const pathname = usePathname();
  const quizId = Number(pathname.split('/').pop());
  const { data, error, isLoading } = useQuizResultQuery(quizId);

  if (error) return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold text-red-500 mb-4">오류가 발생했습니다</h1>
      <p className="text-gray-600">잠시 후 다시 시도해주세요</p>
    </div>
  );

  if (isLoading) return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
    </div>
  );

  const { ranking, name, speed, correctAnswersCount } = data;

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col gap-8">
      <div className="flex items-start gap-12">
        {/* 퀴즈 이미지 */}
        <div className="w-[400px] h-[400px] rounded-2xl overflow-hidden">
          <div className="w-full h-full bg-gray-200" />
        </div>

        {/* 순위표 */}
        <div className="flex-1 flex flex-col">
          <h1 className="text-4xl font-bold mb-6">케이크 퀴즈</h1>
          <div className="bg-white rounded-xl border divide-y">
            {/* 상위 랭킹 */}
            {rankingData.map((item) => (
              <RankingRow key={item.rank} item={item} />
            ))}
            
            {/* 구분선 */}
            <div className="py-2 text-center text-gray-500">
              <span className="inline-block w-1 h-1 bg-gray-300 rounded-full mx-1"></span>
              <span className="inline-block w-1 h-1 bg-gray-300 rounded-full mx-1"></span>
              <span className="inline-block w-1 h-1 bg-gray-300 rounded-full mx-1"></span>
            </div>

            {/* 주변 랭킹 */}
            {nearbyRanks.map((item) => (
              <RankingRow 
                key={item.rank} 
                item={item} 
                isHighlighted={item.rank === myRank.rank}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 평점 */}
      <div className="mt-4">
        <h2 className="text-2xl font-bold mb-2">평점</h2>
        <div className="flex items-center gap-2">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} className="text-3xl text-gray-300">☆</span>
            ))}
          </div>
          <span className="text-3xl ml-2">0.0</span>
        </div>
      </div>

      {/* 확인 버튼 */}
      <button className="w-full py-3 bg-blue-500 text-white rounded-lg text-lg font-medium">
        확인
      </button>

      {/* 댓글 섹션 */}
      <CommentSection comments={comments} />

      {/* 비슷한 퀴즈 */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">비슷한 퀴즈</h2>
        <div className="grid grid-cols-3 gap-6">
          {[1, 2, 3].map((index) => (
            <Link href="/quiz" key={index} className="flex gap-4 p-4 border rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-24 h-24 bg-gray-200 rounded-lg" />
              <div className="flex flex-col">
                <h3 className="text-xl font-bold">과자 퀴즈</h3>
                <div className="flex items-center gap-1 mt-1">
                  <span>★</span>
                  <span>4.8</span>
                </div>
                <span className="mt-auto px-3 py-1 rounded-full border border-gray-300 w-fit">음식</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 