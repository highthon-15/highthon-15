import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CreatedQuiz } from '@/types/user';
import Image from 'next/image';
import Link from 'next/link';
import { apiUrl } from '../constants/config';
import { TOKEN_KEY } from '../constants/key';

interface CreatedQuizWidgetProps {
  quizzes: CreatedQuiz[];
}

const postQuiz = async (quizData: any) => {
  const token = localStorage.getItem(TOKEN_KEY);

  const res = await fetch(`${apiUrl}/question/${quizData.quizId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(quizData),
  });

  if (!res.ok) {
    throw new Error('Error creating quiz');
  }

  return res.json();
};

export const CreatedQuizWidget = ({ quizzes }: CreatedQuizWidgetProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quizData, setQuizData] = useState({
    quizId: `${Date.now()}`,
    questionImage: '',
    correctAnswerImage: '',
    correctAnswer: '',
  });

  const router = useRouter();

  const handleCreateQuiz = async () => {
    try {
      await postQuiz(quizData);
      router.push('/profile');
      setIsModalOpen(false);
    } catch (error) {
      console.error('퀴즈 생성 실패:', error);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">내가 만든 퀴즈</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          퀴즈 만들기
        </button>
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

      {/* 모달 */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h3 className="text-2xl font-bold mb-4">퀴즈 만들기</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleCreateQuiz();
              }}
              className="flex flex-col gap-4"
            >
              {/* 퀴즈 ID 입력 필드 제거 */}
              <label htmlFor="questionImage" className="font-medium">
                질문 이미지 URL
              </label>
              <input
                id="questionImage"
                type="text"
                value={quizData.questionImage}
                onChange={(e) =>
                  setQuizData({ ...quizData, questionImage: e.target.value })
                }
                className="border px-4 py-2 rounded-md"
                required
              />

              <label htmlFor="correctAnswerImage" className="font-medium">
                정답 이미지 URL
              </label>
              <input
                id="correctAnswerImage"
                type="text"
                value={quizData.correctAnswerImage}
                onChange={(e) =>
                  setQuizData({ ...quizData, correctAnswerImage: e.target.value })
                }
                className="border px-4 py-2 rounded-md"
                required
              />

              <label htmlFor="correctAnswer" className="font-medium">
                정답
              </label>
              <input
                id="correctAnswer"
                type="text"
                value={quizData.correctAnswer}
                onChange={(e) =>
                  setQuizData({ ...quizData, correctAnswer: e.target.value })
                }
                className="border px-4 py-2 rounded-md"
                required
              />

              <div className="flex gap-4 mt-6">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 text-black rounded-lg"
                >
                  취소
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                >
                  퀴즈 생성
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
