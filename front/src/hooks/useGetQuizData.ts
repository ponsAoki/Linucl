import axios from "axios";
import { useCallback } from "react"
import { apiEndpoint } from "../services/apiEndpoint";

export const useGetQuizData = () => {
  const getQuizData = useCallback( async (): Promise<void> => {
    await axios.get(`${apiEndpoint}/api/quiz`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, []);
  return { getQuizData }
}
