'use client'

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';

export default function QuizPage() {
  const searchParams = useSearchParams();
  const category = searchParams?.get('category');

  const [quizzes, setQuizzes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (category) {
      fetch(`/api/quiz/${category}`)
        .then((response) => response.json())
        .then((data) => {
          setQuizzes(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('퀴즈를 가져오는 중 오류가 발생했습니다:', error);
          setLoading(false);
        });
    }
  }, [category]);

  return (
    <div>
      <h1>{category} 카테고리 퀴즈</h1>
      {
      quizzes.length === 0 ? (
        <p>이 카테고리에는 퀴즈가 없습니다.</p>
      ) : (
        quizzes.map((quiz) => (
          <Card key={quiz.id} className="mb-6">
            <CardHeader>
              <CardTitle>{quiz.title}</CardTitle>
              <CardDescription>{quiz.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{quiz.explanation}</p>
            </CardContent>
            <CardFooter>
              <button className="px-4 py-2 bg-blue-500 text-white rounded">
                퀴즈 시작
              </button>
            </CardFooter>
          </Card>
        ))
      )}
    </div>
  );
}
