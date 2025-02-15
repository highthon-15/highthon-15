'use client';

import React, {useState} from 'react';
import {SquareChevronRight} from 'lucide-react';
import {useFetchQuestionsQuery} from '@/hooks/useFetchQuestionsQuery';
import {useSubmitAnswerMutation} from '@/hooks/useSubmitAnswerMutation';

export default function Page() {
  const quizId = 1;
  const {data: questions, isLoading, error} = useFetchQuestionsQuery(quizId);
  const {mutate} = useSubmitAnswerMutation();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [speed, setSpeed] = useState('');
  const [startTime, setStartTime] = useState<number | null>(null);

  const handleSubmit = () => {
    if (isSubmitting || !userAnswer) return;
    setIsSubmitting(true);

    const question = questions[currentQuestionIndex];

    if (userAnswer === question.correctAnswer) {
      setCorrectAnswersCount(prev => prev + 1);
    }

    const endTime = Date.now();
    const timeTaken = endTime - (startTime || endTime);
    setSpeed((timeTaken / 1000).toFixed(2));

    mutate(
      {quizId, speed, correctAnswersCount},
      {
        onSettled: () => {
          setIsSubmitting(false);
          setUserAnswer('');
          if (currentQuestionIndex + 1 < questions.length) {
            setCurrentQuestionIndex(prev => prev + 1);
          }
        },
      },
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading questions</div>;

  const currentQuestion = questions[currentQuestionIndex];

  // 첫 번째 문제 시작 시간 기록
  React.useEffect(() => {
    setStartTime(Date.now());
  }, [currentQuestionIndex]);

  return (
    <div className="flex flex-col items-center justify-center h-screen px-4">
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

      {/* 정답 입력 및 제출 */}
      <div className="mt-10 w-full max-w-[400px] flex items-center justify-between gap-4">
        <input
          type="text"
          value={userAnswer}
          onChange={e => setUserAnswer(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="정답을 입력하세요"
          className="w-3/4 px-6 py-4 text-center border-2 border-gray-300 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
        />
        <SquareChevronRight
          className="w-16 h-16 text-gray-500 cursor-pointer hover:text-gray-700"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
}
