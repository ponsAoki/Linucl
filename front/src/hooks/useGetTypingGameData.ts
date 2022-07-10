import axios from "axios"
import { useCallback, useState } from "react"

import { apiEndpoint } from "../services/apiEndpoint"
import { TypingGameData } from "../types/typingGameData";

export const useGetTypingGameData = () => {
  const [typingGameData, setTypingGameData] = useState<Array<TypingGameData>>([]);
  const getTypingGameData = useCallback(async (): Promise<Array<TypingGameData>> => {
    await axios.get<Array<TypingGameData>>(`${apiEndpoint}/v1/api/typingGame`)
      .then((res) => {
        console.log(res.data);
        setTypingGameData(res.data);
      })
      .catch((err) => console.log(err));
    return typingGameData;
  }, [])
  return { typingGameData, getTypingGameData }
}
