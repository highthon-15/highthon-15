import { apiUrl } from '@/components/constants/config';
import { TOKEN_KEY } from '@/components/constants/key';
import { useQuery } from "@tanstack/react-query";   

const getQuizResult = async (quizId: number) => {
  const token = localStorage.getItem(TOKEN_KEY);
  
  const res = await fetch(`${apiUrl}/quiz/my/ranking/${quizId}`, {
    method: 'GET',
    headers: {
      'Authorization': token ? `Bearer ${token}` : '',
      'Content-Type': 'application/json',
    },
  });
  
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
