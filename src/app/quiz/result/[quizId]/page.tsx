'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RankingRow } from '@/components/quiz/RankingRow';
import { CommentSection } from '@/components/quiz/CommentSection';
import { useQuizResultQuery } from '@/hooks/useQuizResultQuery';
import { usePathname } from 'next/navigation';
import { QuizResult } from '@/hooks/useQuizResultQuery';
import { useFetchQuizQuery } from '@/hooks/useQuizQuery';
import { QuizData } from '@/types/quiz';

export default function QuizResultPage() {
  const pathname = usePathname();
  const quizId = Number(pathname.split('/').pop());
  
  // 두 쿼리를 동시에 가져오도록 수정
  const { data: quizDataFetch, error: quizDataError, isLoading: quizDataLoading } = useFetchQuizQuery(quizId);
  const { data, error, isLoading } = useQuizResultQuery(quizId);

  // 로딩 상태 통합
  if (isLoading || quizDataLoading) return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
    </div>
  );

  // 에러 상태 통합
  if (error || quizDataError) return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold text-red-500 mb-4">오류가 발생했습니다</h1>
      <p className="text-gray-600">잠시 후 다시 시도해주세요</p>
    </div>
  );

  if (!data || !quizDataFetch) return null;

  const quizResult: QuizResult = data;
  const { quizResponse, similarQuizzes, myRanking, rankings } = quizDataFetch;

  console.log(quizResponse);

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col gap-8">
      <div className="flex items-start gap-12"> 
        {/* 퀴즈 이미지 */}
        <div className="w-[400px] h-[400px] rounded-2xl overflow-hidden">
          <div className="w-full h-full bg-gray-200" />
        </div>

        {/* 순위표 */}
        <div className="flex-1 flex flex-col">
          <h1 className="text-4xl font-bold mb-6">{quizResponse.title}</h1>
          <div className="bg-white rounded-xl border divide-y">
            <div className="p-4">
              <h2 className="text-2xl font-bold">내 결과</h2>
              <div className="mt-4">
                <p className="text-lg">순위: {quizResult.ranking}위</p>
                <p className="text-lg">정답 개수: {quizResult.correctAnswersCount}개</p>
                <p className="text-lg">소요 시간: {quizResult.speed}</p>
              </div>
            </div>
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
      <Link href="/" className="w-full">
        <button className="w-full py-3 bg-blue-500 text-white rounded-lg text-lg font-medium">
          다른 퀴즈 풀기
        </button>
      </Link>

      {/* 댓글 섹션 */}
      <CommentSection comments={[]} />

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