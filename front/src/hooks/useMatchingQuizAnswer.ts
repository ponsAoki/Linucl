import { useCallback, useState } from "react"

export const useMatchingQuizAnswer = () => {
  const [quizDataReloadFlag, setQuizDataReloadFlag] = useState<boolean>(false);
  const [quizCorrectFlag, setQuizCorrectFlag] = useState<boolean | null>(null);
  const matchingQuizAnswer = useCallback((quizQuestion: string, quizAnswer: string) => {
    setQuizDataReloadFlag((prevstate) => !prevstate)
    if (quizQuestion === quizAnswer) {
      setQuizCorrectFlag(true);
    } else {
      setQuizCorrectFlag(false);
    }
  }, []);
  return { quizDataReloadFlag, quizCorrectFlag, matchingQuizAnswer };
}
