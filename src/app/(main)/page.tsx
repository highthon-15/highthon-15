import QuizCard from '@/components/ui/quizcard';
import PopularQuizCard from '@/components/ui/popularquizcard';
import Link from 'next/link';
import {useRecommendedQuizzes} from '@/hooks/useRecommendedQuizzes';

export default function MainPage() {
  const {data, isLoading, isError} = useRecommendedQuizzes();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading quizzes</div>;

  const {recommendedQuiz, popularQuiz} = data;

  return (
    <div className="flex w-full h-full flex-col mx-auto py-8 items-center">
      {/* 인기 퀴즈 섹션 */}
      <div className="flex w-full h-full flex-col gap-8 pt-12 items-center">
        <div className="flex flex-row w-3/6 justify-between">
          <h2 className="text-4xl font-extrabold">인기 퀴즈</h2>
        </div>
        <div className="flex flex-col w-3/5 md:grid-cols-3 gap-4 items-center">
          {recommendedQuiz?.map((quiz: any) => (
            <Link
              key={quiz.id}
              href={`/quiz/${quiz.id}`}
              className="w-full h-full">
              <PopularQuizCard
                ranknumber={popularQuiz.indexOf(quiz) + 1}
                quiz={quiz}
              />
            </Link>
          ))}
        </div>
      </div>

      {/* 추천 퀴즈 섹션 */}
      <div className="flex w-full h-[50rem] flex-col gap-8 mt-12 items-center">
        <div className="flex flex-row w-3/6 justify-between">
          <h2 className="text-4xl font-extrabold">추천 퀴즈</h2>
        </div>
        <div className="flex w-full h-full gap-4 items-center justify-center">
          <div className="grid grid-cols-3 w-3/6 h-full gap-4 items-center justify-center">
            {popularQuiz?.map((quiz: any) => (
              <Link
                key={quiz.id}
                href={`/quiz/${quiz.id}`}
                className="w-full h-full">
                <QuizCard
                  title={quiz.title}
                  explanation={quiz.explanation}
                  rating={quiz.rating}
                  tag={quiz.tag}
                  thumbnail={quiz.thumbnail}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
