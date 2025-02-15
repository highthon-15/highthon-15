import { useQuery } from "@tanstack/react-query";

const fetchQuestions = async (quizId: number) => {
  const res = await fetch(`http://192.168.0.73:8080/question/list/${quizId}`);
  if (!res.ok) {
    throw new Error('Error fetching questions');
  }
  return res.json(); // [{ id, questionImage, correctAnswerImage, correctAnswer }]
};

export function useFetchQuestionsQuery(quizId: number) {
  return useQuery({
    queryKey: ['questions', quizId],
    queryFn: () => fetchQuestions(quizId),
  });
}
