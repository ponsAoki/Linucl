import { useCallback, useState } from "react"

export const useTypingGameStartTrigger = () => {
  const [typingGameStartFlag, setTypingGameStartFlag] = useState<boolean>(false);
  const typingGameStartTrigger = useCallback((e: any) => {
    if (e.key === " ") {
      setTypingGameStartFlag(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return { typingGameStartFlag, typingGameStartTrigger }
}
