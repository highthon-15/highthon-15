'use client';

import { useState, useEffect } from 'react';
import { SquareChevronRight } from 'lucide-react';
import { useFetchQuestionsQuery } from '@/hooks/useFetchQuestionsQuery';
import { useSubmitAnswerMutation } from '@/hooks/useSubmitAnswerMutation';
import { useRouter } from 'next/navigation';

export default function Page() {
  const quizId = 1;
  const { data: questions, isLoading, error } = useFetchQuestionsQuery(quizId);
  const { mutate } = useSubmitAnswerMutation();
  const router = useRouter();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [speed, setSpeed] = useState('');
  const [startTime, setStartTime] = useState<number | null>(null);

  useEffect(() => {
    if (currentQuestionIndex === 0) {
      setStartTime(Date.now());
    }
  }, [currentQuestionIndex]);

  const handleSubmitAll = () => {
    const endTime = Date.now();
    const timeTaken = endTime - (startTime || endTime);

    // speed 계산 후 바로 사용
    const calculatedSpeed = (timeTaken / 1000).toFixed(2);
    setSpeed(calculatedSpeed); // speed 값 갱신

    let correctCount = 0;
    userAnswers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        correctCount += 1;
      }
    });
    setCorrectAnswersCount(correctCount);

    // 서버로 제출
    mutate(
      { quizId, speed: calculatedSpeed, correctAnswersCount },
      {
        onSettled: () => {
          setIsSubmitting(false);
          router.push(`/quiz/result/${quizId}`);
        },
      },
    );
  };

  const handleAnswerChange = (answer: string) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex] = answer;
    setUserAnswers(updatedAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < (questions?.length || 0)) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  useEffect(() => {
    if (questions && currentQuestionIndex === questions.length) {
      handleSubmitAll();
    }
  }, [currentQuestionIndex, questions]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (currentQuestionIndex + 1 < (questions?.length || 0)) {
        handleNextQuestion();
      } else {
        handleSubmitAll();
      }
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading questions</div>;

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="flex flex-col items-center mt-16 justify-start min-h-screen px-4 overflow-hidden">
      <div className="absolute top-8 left-8 px-6 py-3 bg-white shadow-md rounded-lg text-2xl font-semibold">
        {currentQuestionIndex + 1}{' '}
        <span className="text-gray-500">/ {questions.length}</span>
      </div>

      {/* 문제 이미지 */}
      <div className="mt-8 w-full max-w-[800px] h-[500px] rounded-xl overflow-hidden shadow-lg flex justify-center items-center">
        <img
          src={currentQuestion.questionImage}
          alt="문제 이미지"
          className="w-full h-full object-cover"
        />
      </div>

      {/* 정답 입력 */}
      <div className="mt-10 w-full max-w-[400px] flex items-center justify-between gap-4">
        <input
          type="text"
          value={userAnswers[currentQuestionIndex] || ''}
          onChange={e => handleAnswerChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="정답을 입력하세요"
          className="w-3/4 px-6 py-4 text-center border-2 border-gray-300 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <SquareChevronRight
          className="w-16 h-16 text-gray-500 cursor-pointer hover:text-gray-700"
          onClick={handleNextQuestion}
        />
      </div>
    </div>
  );
}
