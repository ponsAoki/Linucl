import { FormEvent, RefObject, useState } from "react"

export const useMatchingAnswer = () => {
  const [correctFlag, setCorrectFlag] = useState<boolean | null>(null);
  const matchingAnswer = (e: FormEvent<HTMLFormElement>, correctCommand: string, ref: RefObject<HTMLInputElement>): void => {
    e.preventDefault();
    ref.current?.value === correctCommand ? setCorrectFlag(true) : setCorrectFlag(false);
  }
  return { correctFlag, matchingAnswer }
}
