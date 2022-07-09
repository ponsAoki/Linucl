import { FormEvent, RefObject, useCallback, useState } from "react"

export const useMatchingAnswer = () => {
  const initialNum: number = 0;
  const [counter, setCounter] = useState<number>(initialNum);
  const [correctFlag, setCorrectFlag] = useState<boolean | null>(null);
  const matchingAnswer = (e: FormEvent<HTMLFormElement>, answer: string, ref: RefObject<HTMLInputElement>): {correctFlag: boolean | null} => {
    e.preventDefault();
    ref.current?.value === answer ? setCorrectFlag(true) : setCorrectFlag(false);
    setCounter((prevCounter) => prevCounter + 1);
    return { correctFlag }
  }
  const initCorrectFlag = useCallback(() => {
    setCorrectFlag(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return { counter, correctFlag, matchingAnswer, initCorrectFlag }
}
