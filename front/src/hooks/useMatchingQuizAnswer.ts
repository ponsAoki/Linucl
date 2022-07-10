import { useCallback, useState } from "react"

export const useMatchingQuizAnswer = () => {
  const [quizDataReloadFlag, setQuizDataReloadFlag] = useState<boolean>(false);
  const matchingQuizAnswer = useCallback((quizQuestion: string, quizAnswer: string) => {
    if (quizQuestion === quizAnswer) {
      console.log(true);
    } else {
      console.log(false);
    }
    setQuizDataReloadFlag((prevstate) => !prevstate)
  }, []);
  return { quizDataReloadFlag, matchingQuizAnswer };
}
