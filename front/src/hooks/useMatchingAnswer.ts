import { FormEvent, RefObject, useCallback, useState } from "react"

// import { useSleep } from "./useSleep";

export const useMatchingAnswer = () => {
  // const { sleep } = useSleep();
  const initialNum: number = 0;
  const [counter, setCounter] = useState<number>(initialNum);
  const [correctFlag, setCorrectFlag] = useState<boolean | null>(null);
  const matchingAnswer = (e: FormEvent<HTMLFormElement>, correctCommand: string, ref: RefObject<HTMLInputElement>): {correctFlag: boolean | null} => {
    e.preventDefault();
    ref.current?.value === correctCommand ? setCorrectFlag(true) : setCorrectFlag(false);
    setCounter((prevCounter) => prevCounter + 1);
    return { correctFlag }
  }
  const initCorrectFlag = useCallback(() => {
    // await sleep(1000);
    setCorrectFlag(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return { counter, correctFlag, matchingAnswer, initCorrectFlag }
}
