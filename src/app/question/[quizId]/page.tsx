'use client';

import {useState, useEffect} from 'react';
import {SquareChevronRight} from 'lucide-react';
import {useFetchQuestionsQuery} from '@/hooks/useFetchQuestionsQuery';
import {useSubmitAnswerMutation} from '@/hooks/useSubmitAnswerMutation';
import {useRouter} from 'next/navigation';

export default function Page() {
  const quizId = 1;
  const {data: questions, isLoading, error} = useFetchQuestionsQuery(quizId);
  const {mutate} = useSubmitAnswerMutation();
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

    const calculatedSpeed = (timeTaken / 1000).toFixed(2);
    setSpeed(calculatedSpeed);

    let correctCount = 0;
    userAnswers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        correctCount += 1;
      }
    });
    setCorrectAnswersCount(correctCount);

    mutate(
      {quizId, speed: calculatedSpeed, correctAnswersCount},
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

  useEffect(() => {
    if (questions && currentQuestionIndex === questions.length - 1) {
      handleSubmitAll();
    }
  }, [currentQuestionIndex, questions]);

  const handleNextQuestion = () => {
    // 입력이 없으면 넘어가지 않도록 방어 처리
    if (!userAnswers[currentQuestionIndex]) return;
  
    if (currentQuestionIndex + 1 < (questions?.length || 0)) {
      setCurrentQuestionIndex(prev => prev + 1); // 올바르게 1씩만 증가하도록 보장
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      // 입력이 없으면 넘어가지 않도록 방어 처리
      if (!userAnswers[currentQuestionIndex]) return;
  
      // 엔터가 눌렸을 때, 한 번만 `handleNextQuestion`을 호출하도록 설정
      handleNextQuestion();
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
      <div className="mt-8 w-full max-w-[800px] h-[500px] rounded-xl overflow-hidden shadow-lg flex justify-center items-center bg-gray-100">
        <img
          src={currentQuestion.questionImage}
          alt="문제 이미지"
          className="w-full h-full object-contain"
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
