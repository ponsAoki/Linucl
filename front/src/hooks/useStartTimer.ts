import { useCallback, useState } from "react";

export const useStartTimer = () => {
  const [timeLimit, setTimeLimit] = useState<number>(10); // 時間制限が一問につき10秒
  const startTimer = useCallback(() => {
    setTimeLimit(10);
    let startTime: Date = new Date();
    const timerId = setInterval(() => {
      let nowTime: Date = new Date();
      setTimeLimit(timeLimit - ((nowTime.valueOf() - startTime.valueOf()) / 1000));
      if (timeLimit - ((nowTime.valueOf() - startTime.valueOf()) / 1000) <= 0) {
        setTimeLimit(0);
        clearInterval(timerId);
      }
    }, 50)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { timeLimit, startTimer }
}
