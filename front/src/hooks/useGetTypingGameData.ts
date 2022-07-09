import axios from "axios"
import { useCallback, useState } from "react"

import { apiEndpoint } from "../services/apiEndpoint"
import { TypingGameData } from "../types/typingGameData";

export const useGetTypingGameData = () => {
  // const [problem, setProblem] = useState<string>("テスト問題文");  // 一時的に初期値を設定
  // const [correctCommand, setCorrectCommand] = useState<string>("test");  // 一時的に初期値を設定
  const [typingGameData, setTypingGameData] = useState<Array<TypingGameData>>([
    {
        problem: "problem1",
        correctCommand: "test1",
      },
      {
        problem: "problem2",
        correctCommand: "test2",
      },
      {
        problem: "problem3",
        correctCommand: "test3",
      }
  ]);
  const getTypingGameData = useCallback(async (): Promise<void> => {
    setTypingGameData([
      {
        problem: "problem1",
        correctCommand: "test1",
      },
      {
        problem: "problem2",
        correctCommand: "test2",
      },
      {
        problem: "problem3",
        correctCommand: "test3",
      }
    ]);
    await axios.get<Array<TypingGameData>>(`${apiEndpoint}/v1/api/typingGame`)
      .then((res) => {
        console.log(res.data);
        // setTypingGameData(res.data);
        // setTypingGameData(res.data);
        // setProblem(res.data.problem);
        // setCorrectCommand(res.data.problem);
      })
      .catch((err) => {
        console.log(err);
    //     setTypingGameData([
    //   {
    //     problem: "problem1",
    //     correctCommand: "test1",
    //   },
    //   {
    //     problem: "problem2",
    //     correctCommand: "test2",
    //   },
    //   {
    //     problem: "problem3",
    //     correctCommand: "test3",
    //   }
    // ])
      });
  }, [])
  return { typingGameData, getTypingGameData }
}
