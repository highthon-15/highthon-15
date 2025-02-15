export interface RankingItem {
  rank: number;
  name: string;
  time: string;
  score: string;
}

export interface Comment {
  user: string;
  date: string;
  content: string;
}

export interface QuizData {
  id: string;
  title: string;
  category: string;
  rating: number;
  imageUrl?: string;
} 