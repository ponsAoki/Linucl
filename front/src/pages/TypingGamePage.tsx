import { FC, memo, useEffect, useState } from "react";

import { TimeBar } from "../components/atoms/TimeBar";
import { TypingGameStartScreen } from "../components/molecules/TypingGameStartScreen";
import { Footer, Header } from "../components/organisms/layout";
import { TypingGameScreen } from "../components/organisms/TypingGameScreen";
import { useGetTypingGameData } from "../hooks/useGetTypingGameData";
import { useMatchingAnswer } from "../hooks/useMatchingAnswer";
import { useSleep } from "../hooks/useSleep";
import { useStartTimer } from "../hooks/useStartTimer";
import { useTypingGameStartTrigger } from "../hooks/useTypingGameStartTrigger";

export const TypingGamePage: FC = memo(() => {
  const { typingGameStartFlag, typingGameStartTrigger } = useTypingGameStartTrigger();
  const { typingGameData, getTypingGameData } = useGetTypingGameData();
  const { counter, correctFlag, matchingAnswer, initCorrectFlag } = useMatchingAnswer();
  const { timeLimit, startTimer } = useStartTimer();
  const { sleep } = useSleep();
  const [problem, setProblem] = useState<string>("");
  const [correctCommand, setCorrectCommand] = useState<string>("");

  useEffect(() => {
    getTypingGameData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setProblem(typingGameData[counter].problem);
    console.log(problem);
    setCorrectCommand(typingGameData[counter].correctCommand);
    console.log(correctFlag);
    if (counter !== 0) {
      sleep(1000)
        .then(() => {
          console.log(2000);
          initCorrectFlag();
          console.log(correctFlag);
        })
    }
  }, [counter]);

  return (
    <div className="overflow-x-hidden">
      <Header />
      <div className="bg-zinc-900 py-12">
        <div className="box-border border-4 rounded-3xl outline-none w-2/3 px-8 py-12 mx-auto my-24 text-center shadow-lg shadow-zinc-500 relative">
          {typingGameStartFlag ? (
            <TypingGameScreen problem={problem} correctCommand={correctCommand} correctFlag={correctFlag} onSubmit={matchingAnswer} />
          ) : (
            <TypingGameStartScreen onKeyDown={(e: any) => typingGameStartTrigger(e)} />
          )}
          <TimeBar timeLimit={timeLimit} />
        </div>
      </div>
      <Footer />
    </div>
  )
})
