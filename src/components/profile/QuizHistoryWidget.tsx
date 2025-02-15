import { QuizHistory } from '@/types/user';
import Link from 'next/link';
import Image from 'next/image';

interface QuizHistoryWidgetProps {
  histories: QuizHistory[];
}

export const QuizHistoryWidget = ({ histories }: QuizHistoryWidgetProps) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm w-[500px]">
      <h2 className="text-2xl font-bold mb-6">퀴즈 기록</h2>
      <div className="space-y-4">
        {histories.map((history) => (
          <Link
            key={`${history.quizId}-${history.completedAt}`}
            href={`/quiz/result/${history.quizId}`}
            className="block p-4 border rounded-xl hover:shadow-lg transition-shadow"
          >
            <div className="flex gap-4">
              <div className="relative w-24 h-24 flex-shrink-0">
                {history.thumbnailUrl ? (
                  <Image
                    src={history.thumbnailUrl}
                    alt={history.quizTitle}
                    fill
                    className="rounded-lg object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 rounded-lg" />
                )}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold">{history.quizTitle}</h3>
                    <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                      <span>{history.completedAt}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-blue-500">
                      {history.rank}위
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-3">
                  <div className="flex items-center gap-1 text-gray-600">
                    <span className="font-medium">점수</span>
                    <span>{history.score}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <span className="font-medium">시간</span>
                    <span>{history.time}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}; 