'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Comment {
  user: string;
  date: string;
  content: string;
}

// 임시 순위 데이터
const rankingData = [
  { rank: 1, name: '김영철', time: '00:07:21', score: '10/10' },
  { rank: 2, name: '김진수', time: '00:08:03', score: '10/10' },
  { rank: 3, name: '황하미', time: '00:08:57', score: '10/10' },
  { rank: 4, name: '이영명', time: '00:08:60', score: '10/10' },
];

const myRank = { rank: 3723, name: '나영진', time: '00:40:97', score: '10/10' };

const nearbyRanks = [
  { rank: 3720, name: '최영범', time: '00:40:38', score: '10/10' },
  { rank: 3721, name: '김미나', time: '00:40:92', score: '10/10' },
  { rank: 3722, name: '차우현', time: '00:40:95', score: '10/10' },
  myRank,
  { rank: 3724, name: '김준진', time: '00:41:22', score: '10/10' },
  { rank: 3725, name: '임민진', time: '00:42:92', score: '10/10' },
  { rank: 3726, name: '최영범', time: '00:42:99', score: '10/10' },
];

// 임시 댓글 데이터
const comments: Comment[] = [
  { user: '김영철', date: '2025/02/15', content: '내가 일등 ㅋ' },
  { user: '주현아', date: '2025/02/13', content: '케이크 맛있겠다..' },
  { user: '김진진', date: '2025/02/12', content: '시은 돈있겠다 ㅋ' },
  { user: '박지원', date: '2025/01/27', content: '5번 문제가 어려웠죠' },
  { user: '최영범', date: '2025/01/25', content: '우리집에 고구마 케이크 있을 부탁요? 고구마 케이크 진짜 맛있는데~~ 내가 다 먹을거임 하하하하하' },
];

const RankingRow = ({ item, isHighlighted = false }: { item: typeof myRank, isHighlighted?: boolean }) => (
  <div 
    className={`flex items-center h-10 px-4 ${
      isHighlighted ? 'bg-blue-50' : ''
    }`}
  >
    <span className="w-12 text-center">{item.rank}</span>
    <div className="w-6 h-6 bg-gray-200 rounded-full mr-2" />
    <span className="flex-1">{item.name}</span>
    <span className="w-20 text-center text-gray-600">속도</span>
    <span className="w-20 text-center text-gray-600">{item.time}</span>
    <span className="w-16 text-center text-gray-600">개수</span>
    <span className="w-16 text-center text-gray-600">{item.score}</span>
  </div>
);

export default function QuizResultPage() {
  const [currentCommentPage, setCurrentCommentPage] = React.useState(1);
  const commentsPerPage = 5;
  const totalPages = Math.ceil(comments.length / commentsPerPage);
  
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
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">댓글</h2>
        {/* 댓글 입력 */}
        <div className="flex items-center gap-2 mb-6">
          <input
            type="text"
            placeholder="댓글을 입력하세요."
            className="flex-1 p-3 border rounded-lg text-black"
          />
          <button className="px-4 py-3 bg-gray-100 rounded-lg hover:bg-gray-200 text-xl">
            ↑
          </button>
        </div>
        {/* 댓글 목록 */}
        <div className="space-y-6">
          {comments
            .slice((currentCommentPage - 1) * commentsPerPage, currentCommentPage * commentsPerPage)
            .map((comment, index) => (
              <div key={index} className="flex gap-3">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold">{comment.user}</span>
                    <span className="text-gray-500 text-sm">• {comment.date}</span>
                  </div>
                  <p className="text-gray-700 mt-1">{comment.content}</p>
                </div>
              </div>
          ))}
        </div>
        {/* 페이지네이션 */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentCommentPage(page)}
              className={`w-8 h-8 rounded-full ${
                currentCommentPage === page
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>

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