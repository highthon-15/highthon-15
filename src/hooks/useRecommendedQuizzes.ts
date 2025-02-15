import { apiUrl } from "@/components/constants/config";
import { useQuery } from "@tanstack/react-query";

const fetchQuizzes = async () => {
  const res = await fetch(`${apiUrl}/quiz/recommended`, {
    headers: { "Accept": "*/*" },
  });
  const data = await res.json();
  return data; // { recommendedQuiz: [], popularQuiz: [] }
};

export const useRecommendedQuizzes = () => {
  return useQuery(["quizzes"], fetchQuizzes);
};
