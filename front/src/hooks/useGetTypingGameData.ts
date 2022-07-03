import axios from "axios"
import { useCallback, useState } from "react"

import { apiEndpoint } from "../services/apiEndpoint"
import { TypingGameData } from "../types/typingGameData";

export const useGetTypingGameData = () => {
  const [problem, setProblem] = useState<string>("テスト問題文");  // 一時的に初期値を設定
  const [correctCommand, setCorrectCommand] = useState<string>("test");  // 一時的に初期値を設定
  const getTypingGameData = useCallback( async (): Promise<void> => {
    await axios.get<TypingGameData>(`${apiEndpoint}/api/typingGame`)
      .then((res) => {
        console.log(res.data);
        setProblem(res.data.problem);
        setCorrectCommand(res.data.problem);
      })
      .catch((err) => console.log(err));
  }, [])
  return { problem, correctCommand, getTypingGameData }
}
