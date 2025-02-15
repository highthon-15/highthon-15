import { apiUrl } from '@/components/constants/config';
import { TOKEN_KEY } from '@/components/constants/key';
import { useMutation } from '@tanstack/react-query';

export interface Props {
  quizId: number;
  speed: string;
  correctAnswersCount: number;
}

const submitAnswer = async ({ quizId, speed, correctAnswersCount }: Props) => {
  const token = localStorage.getItem(TOKEN_KEY);

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const res = await fetch(`${apiUrl}/question/result/${quizId}`, {
    method: 'POST',
    body: JSON.stringify({ speed, correctAnswersCount }),
    headers: headers,
  });

  if (!res.ok) {
    throw new Error('Error submitting result');
  }

  const text = await res.text();
  if (text) {
    return JSON.parse(text);
  } else {
    return {};
  }
};

export function useSubmitAnswerMutation() {
  return useMutation({
    mutationFn: submitAnswer,
    onSuccess: data => {
      console.log('정답 제출 성공:', data);
    },
    onError: error => {
      console.error('정답 제출 실패:', error);
    },
  });
}
