'use client';

import React, {useEffect, useState} from 'react';
import {usePathname} from 'next/navigation';
import {apiUrl} from '@/components/constants/config';

export default function Page() {
  const pathname = usePathname();
  const tag = pathname.split('/')[1];
  const [quizzes, setQuizzes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (tag) {
      fetch(`${apiUrl}/doc/${tag}`)
        .then(response => response.json())
        .then(data => {
          setQuizzes(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('퀴즈를 가져오는 중 오류가 발생했습니다:', error);
          setLoading(false);
        });
    }
  }, [tag]);

  if (loading) return <div>로딩 중...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">{tag} 메인 페이지</h1>
        <p className="text-xl text-gray-600">
          {tag} 카테고리 퀴즈에 오신 것을 환영합니다.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Array.isArray(quizzes) ? (
          quizzes.map(quiz => (
            <div key={quiz.id} className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">{quiz.title}</h2>
              <p className="text-gray-600">{quiz.description}</p>
            </div>
          ))
        ) : (
          <p>이 카테고리에는 퀴즈가 없습니다.</p>
        )}
      </section>
    </div>
  );
};
