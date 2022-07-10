import { useCallback } from "react"

export const useMatchingQuizAnswer = () => {
  const matchingQuizAnswer = useCallback((quizQuestion: string, quizAnswer: string) => {
    if (quizQuestion === quizAnswer) {
      console.log(true);
    } else {
      console.log(false);
    }
  }, []);
  return { matchingQuizAnswer };
}
