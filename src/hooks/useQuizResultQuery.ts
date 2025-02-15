import { apiUrl } from '@/components/constants/config';
import { TOKEN_KEY } from '@/components/constants/key';
import { useQuery } from "@tanstack/react-query";   


export interface QuizResult {
  ranking: number;
  name: string;
  speed: string;
  correctAnswersCount: number;
}

const getQuizResult = async (quizId: number) => {

  const token = localStorage.getItem(TOKEN_KEY); // JWT 토큰 가져오기
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  };
  // 퀴즈 결과 조회
  const res = await fetch(`${apiUrl}/quiz/my/ranking/${quizId}`, {
    method: "GET",
    headers: headers,
  });
  if (!res.ok) {
    throw new Error('Error fetching quiz');
  }
  console.log("조회 성공");
  if(res.body == null) {
    throw new Error('Error fetching quiz');
  }
  const data = await res.json();
  console.log("data: ", data);

  return data;
};

export const useQuizResultQuery = (quizId: number) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['quizResult', quizId],
    queryFn: () => getQuizResult(quizId),
  });

  return { data, error, isLoading };
};
