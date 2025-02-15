import {apiUrl} from '@/components/constants/config';
import { useQuery } from "@tanstack/react-query";   

interface QuizResult {
  ranking: number;
  name: string;
  speed: string;
  correctAnswersCount: number;
}

const getQuizResult = async (quizId: number) => {
  const res = await fetch(`${apiUrl}/quiz/my/ranking/${quizId}`);
  if (!res.ok) {
    throw new Error('Error fetching quiz');
  }
  return res.json();
};

export const useQuizResultQuery = (quizId: number) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['quizResult', quizId],
    queryFn: () => getQuizResult(quizId),
  });
  

  return { data, error, isLoading };
};
