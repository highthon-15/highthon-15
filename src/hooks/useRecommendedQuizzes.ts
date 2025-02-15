import { useQuery } from "@tanstack/react-query";

const fetchQuizzes = async () => {
  const res = await fetch("http://192.168.0.73:8080/quiz/recommended", {
    headers: { "Accept": "*/*" },
  });
  const data = await res.json();
  return data; // { recommendedQuiz: [], popularQuiz: [] }
};

export const useRecommendedQuizzes = () => {
  return useQuery(["quizzes"], fetchQuizzes);
};
