'use client';

import { ProfileWidget } from '@/components/profile/ProfileWidget';
import { CreatedQuizWidget } from '@/components/profile/CreatedQuizWidget';
import { QuizHistoryWidget } from '@/components/profile/QuizHistoryWidget';
import { UserProfile, CreatedQuiz, QuizHistory } from '@/types/user';

// 임시 데이터
const mockProfile: UserProfile = {
  id: '1',
  name: '나현진',
  nickname: '케이크러버',
  email: 'cake@example.com',
  createdAt: '2024-01-01',
  role: 'USER',
};

const mockCreatedQuizzes: CreatedQuiz[] = [
  {
    id: '1',
    title: '케이크 퀴즈',
    category: '음식',
    rating: 4.8,
    participantCount: 3723,
    thumbnailUrl: '/images/cake.jpg',
    createdAt: '2024-02-15',
  },
  {
    id: '2',
    title: '과자 퀴즈',
    category: '음식',
    rating: 4.5,
    participantCount: 1234,
    thumbnailUrl: '/images/snack.jpg',
    createdAt: '2024-02-10',
  },
];

const mockHistories: QuizHistory[] = [
  {
    quizId: '1',
    quizTitle: '케이크 퀴즈',
    score: '10/10',
    time: '00:40:97',
    rank: 3723,
    thumbnailUrl: '/images/cake.jpg',
    completedAt: '2024-02-15',
  },
  {
    quizId: '2',
    quizTitle: '과자 퀴즈',
    score: '9/10',
    time: '00:35:21',
    rank: 234,
    thumbnailUrl: '/images/snack.jpg',
    completedAt: '2024-02-10',
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