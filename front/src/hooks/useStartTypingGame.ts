import { useCallback, useState } from "react"

export const useStartTypingGame = () => {
  const [typingGameStartFlag, setTypingGameStartFlag] = useState<boolean>(false);
  const startTypingGame = useCallback((e: any) => {
    if (e.key === " ") {
      setTypingGameStartFlag(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return { typingGameStartFlag, startTypingGame }
}
