import axios from "axios"
import { useCallback, useState } from "react"

import { apiEndpoint } from "../services/apiEndpoint"
import { TypingGameData } from "../types/typingGameData";

export const useGetTypingGameData = () => {
  const [problem, setProblem] = useState<string>("");
  const [correctCommand, setCorrectCommand] = useState<string>("");
  const getTypingGameData = useCallback((): void => {
    axios.get<TypingGameData>(`${apiEndpoint}/api/typingGame`)
      .then((res) => {
        console.log(res.data);
        setProblem(res.data.problem);
        setCorrectCommand(res.data.problem);
      })
      .catch((err) => console.log(err));
  }, [])
  return { problem, correctCommand, getTypingGameData }
}
