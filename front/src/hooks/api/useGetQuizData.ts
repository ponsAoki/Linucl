import axios from "axios";
import { useCallback, useState } from "react"

import { apiEndPoint } from "../../services/apiEndpoint";
import { QuizData } from "../../types/quizData";

export const useGetQuizData = () => {
  const [quizQuestion, setQuizQuestion] = useState<string>("");
  const [quizAnswer, setQuizAnswer] = useState<string>("");
  const [quizSelects, setQuizSelects] = useState<Array<string>>([]);
  const getQuizData = useCallback( async (): Promise<void> => {
    await axios.get<QuizData>(`${apiEndPoint}/v1/api/quiz`)
      .then((res) => {
        setQuizQuestion(res.data.QAset.question);
        setQuizAnswer(res.data.QAset.answer);
        setQuizSelects(res.data.selects);
      })
      .catch((err) => console.log(err));
  }, []);
  return { quizQuestion, quizAnswer, quizSelects, getQuizData }
}
