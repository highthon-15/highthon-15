'use client';

import { ProfileWidget } from '@/components/profile/ProfileWidget';
import { CreatedQuizWidget } from '@/components/profile/CreatedQuizWidget';
import { QuizHistoryWidget } from '@/components/profile/QuizHistoryWidget';
import { UserProfile, CreatedQuiz, QuizHistory } from '@/types/user';

// 임시 데이터
const mockProfile: UserProfile = {
  id: '1',
  name: '유지민',
  nickname: '유지민',
  email: 'example@gmail.com',
  createdAt: '2025-02-16',
  role: 'USER',
};

const mockCreatedQuizzes: CreatedQuiz[] = [
  {
    id: '7',
    title: '뉴진스 팜국어 모의고사',
    category: 'IDOL',
    rating: 4.3,
    participantCount: 2,
    thumbnailUrl: 'https://cnqnq6x1162u.objectstorage.ap-seoul-1.oci.customer-oci.com/p/4d_DJXYmI0ejd8avuhAILIIpyZqnmHvpQPxB3i9g9MKd65-abwpaD-tq-jraNd1k/n/cnqnq6x1162u/b/machugi-image/o/81d0ac25-7a36-4031-8efa-293408d6c610.jpeg',
    createdAt: '2025-02-16',
  },
  {
    id: '8',
    title: '맹구고사 (살짝업데)',
    category: 'SPORT',
    rating: 3.9,
    participantCount: 2,
    thumbnailUrl: 'https://cnqnq6x1162u.objectstorage.ap-seoul-1.oci.customer-oci.com/p/4d_DJXYmI0ejd8avuhAILIIpyZqnmHvpQPxB3i9g9MKd65-abwpaD-tq-jraNd1k/n/cnqnq6x1162u/b/machugi-image/o/f7c07b89-b1c1-4c33-95d2-7cd155a3654e.jpeg',
    createdAt: '2025-02-16',
  },
];

const mockHistories: QuizHistory[] = [
  {
    quizId: '1',
    quizTitle: '삼성라이온즈 선수 맞추기 上',
    score: '5/10',
    time: '00:12:01',
    rank: 13,
    thumbnailUrl: 'https://cnqnq6x1162u.objectstorage.ap-seoul-1.oci.customer-oci.com/p/4d_DJXYmI0ejd8avuhAILIIpyZqnmHvpQPxB3i9g9MKd65-abwpaD-tq-jraNd1k/n/cnqnq6x1162u/b/machugi-image/o/99bfe2ed-6ff8-4d26-a61c-bf63078b70a8.jpeg',
    completedAt: '2025-02-16',
  },
];

export default function ProfilePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-8">
        <div className="flex-1 flex flex-col gap-8">
          <ProfileWidget profile={mockProfile} />
          <CreatedQuizWidget quizzes={mockCreatedQuizzes} />
        </div>
        <QuizHistoryWidget histories={mockHistories} />
      </div>
    </div>
  );
} 