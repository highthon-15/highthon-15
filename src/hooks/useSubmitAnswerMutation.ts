import {useMutation} from '@tanstack/react-query';

export interface Props {
  quizId: number;
  speed: string;
  correctAnswersCount: number;
}   

const submitAnswer = async ({quizId, speed, correctAnswersCount}: Props) => {
  const res = await fetch(
    `http://192.168.0.73:8080/question/result/${quizId}`,
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
