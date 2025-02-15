export interface UserProfile {
  id: string;
  name: string;
  nickname: string;
  email: string;
  profileImage?: string;
  createdAt: string;
  role: 'USER' | 'ADMIN';
}

export interface QuizHistory {
  quizId: string;
  quizTitle: string;
  score: string;
  time: string;
  rank: number;
  thumbnailUrl?: string;
  completedAt: string;
}

export interface CreatedQuiz {
  id: string;
  title: string;
  category: string;
  rating: number;
  participantCount: number;
  thumbnailUrl?: string;
  createdAt: string;
} 