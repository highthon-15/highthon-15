'use client'

import { useRouter } from 'next/navigation';
import React from 'react';

export default function QuizPage() {
  const router = useRouter();
  
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col gap-8">
      {/* 퀴즈 제목과 평점 */}
      <div className="flex items-start gap-8">
        {/* 퀴즈 이미지 */}
        <div className="w-[500px] h-[500px] rounded-2xl overflow-hidden">
          <div className="w-full h-full bg-gray-200" /> {/* 임시 이미지 영역 */}
        </div>
        
        {/* 퀴즈 정보 */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <h1 className="text-4xl font-bold">케이크 퀴즈</h1>
            <div className="flex items-center gap-1">
              <span className="text-2xl">★</span>
              <span className="text-2xl">4.8</span>
            </div>
          </div>
          
          {/* 태그 */}
          <div className="flex gap-2">
            <span className="px-4 py-2 rounded-full border border-gray-300">음식</span>
            <span className="px-4 py-2 rounded-full border border-gray-300">케이크</span>
          </div>
          
          {/* 설명 */}
          <p className="text-lg text-gray-700 mt-4">
            케이크 사진 일부를 보고 어떤 케이크인지 맞히는 퀴즈입니다.
          </p>
          
          {/* 시작하기 버튼 */}
          <button onClick={() => router.push("question/1")} className="w-1/2 mt-8 px-8 py-4 bg-white text-black border-2 border-black rounded-xl text-xl font-bold hover:bg-gray-800 transition-colors">
            시작
          </button>
        </div>
      </div>

      {/* 비슷한 퀴즈 섹션 */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">비슷한 퀴즈</h2>
        <div className="grid grid-cols-3 gap-6">
          {/* 비슷한 퀴즈 카드 */}
          {[1, 2, 3].map((index) => (
            <div key={index} className="flex gap-4 p-4 border rounded-xl hover:shadow-lg transition-shadow">
              <div className="w-32 h-32 bg-gray-200 rounded-lg" /> {/* 임시 이미지 */}
              <div className="flex flex-col">
                <h3 className="text-xl font-bold">과자 퀴즈</h3>
                <div className="flex items-center gap-1 mt-1">
                  <span>★</span>
                  <span>4.8</span>
                </div>
                <div className="flex flex-row w-full h-full items-end">
                    <span className="mt-2 px-3 py-1 rounded-full border border-gray-300 w-fit">음식</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 