import { apiUrl } from '@/components/constants/config';
import {useMutation} from '@tanstack/react-query';

export interface Props {
  quizId: number;
  speed: string;
  correctAnswersCount: number;
}   

const submitAnswer = async ({quizId, speed, correctAnswersCount}: Props) => {
  const res = await fetch(
    `${apiUrl}/question/result/${quizId}`,
    {
      method: 'POST',
      body: JSON.stringify({speed, correctAnswersCount}),
      headers: {'Content-Type': 'application/json'},
    },
  );

  if (!res.ok) {
    throw new Error('Error submitting result');
  }

  return res.json();
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
