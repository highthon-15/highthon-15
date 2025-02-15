import {apiUrl} from '@/components/constants/config';
import {useQuery} from '@tanstack/react-query';

const fetchQuizzes = async (quizId: number) => {
  const res = await fetch(`${apiUrl}/quiz/${quizId}`);
  if (!res.ok) {
    throw new Error('Error fetching quiz');
  }
  return res.json();
};

export function useFetchQuizQuery(quizId: number) {
  return useQuery({
    queryKey: ['quiz', quizId],
    queryFn: () => fetchQuizzes(quizId),
  });
}
