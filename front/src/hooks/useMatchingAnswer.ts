import { FormEvent, RefObject, useCallback, useState } from "react"

export const useMatchingAnswer = () => {
  const [correctFlag, setCorrectFlag] = useState<boolean | null>(null);
  const [reloadFlag, setReloadFlag] = useState<number>(0);
  const matchingAnswer = (e: FormEvent<HTMLFormElement>, answer: string, ref: RefObject<HTMLInputElement>): {correctFlag: boolean | null} => {
    e.preventDefault();
    ref.current?.value === answer ? setCorrectFlag(true) : setCorrectFlag(false);
    return { correctFlag }
  }
  const initCorrectFlag = useCallback(() => {
    setCorrectFlag(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const reload = useCallback(() => {
    setReloadFlag(prev => prev + 1);
  }, [])
  return { correctFlag, reloadFlag, matchingAnswer, initCorrectFlag, reload }
}
