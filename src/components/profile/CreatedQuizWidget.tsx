import { CreatedQuiz } from '@/types/user';
import Image from 'next/image';
import Link from 'next/link';

interface CreatedQuizWidgetProps {
  quizzes: CreatedQuiz[];
}

export const CreatedQuizWidget = ({ quizzes }: CreatedQuizWidgetProps) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">내가 만든 퀴즈</h2>
        <Link 
          href="/quiz/create" 
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          퀴즈 만들기
        </Link>
      </div>
      <div className="grid grid-cols gap-4">
        {quizzes.map((quiz) => (
          <Link 
            key={quiz.id} 
            href={`/quiz/${quiz.id}`}
            className="flex gap-4 p-4 border rounded-xl hover:shadow-lg transition-shadow"
          >
            <div className="relative w-24 h-24">
              {quiz.thumbnailUrl ? (
                <Image
                  src={quiz.thumbnailUrl}
                  alt={quiz.title}
                  fill
                  className="rounded-lg object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 rounded-lg" />
              )}
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-bold">{quiz.title}</h3>
              <div className="flex items-center gap-1 mt-1">
                <span>★</span>
                <span>{quiz.rating.toFixed(1)}</span>
              </div>
              <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
                <span>{quiz.participantCount}명 참여</span>
                <span>•</span>
                <span>{quiz.category}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}; 