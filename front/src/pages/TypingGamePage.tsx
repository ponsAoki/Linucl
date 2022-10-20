import { FC, FormEvent, memo, useCallback, useEffect, useState, useRef, RefObject } from "react";
import { useNavigate } from "react-router-dom";

// import { TimeBar } from "../components/atoms/TimeBar";
import { TypingGameEndScreen } from "../components/atoms/TypingGameEndScreen";
import { TypingGameStartScreen } from "../components/molecules/TypingGameStartScreen";
import { Footer, Header } from "../components/organisms/layout";
import { TypingGameScreen } from "../components/organisms/TypingGameScreen";
import { useGetTypingGameData } from "../hooks/api/useGetTypingGameData";
import { useMatchingAnswer } from "../hooks/useMatchingAnswer";
// import { useSleep } from "../hooks/useSleep";
import { useStartTimer } from "../hooks/useStartTimer";
import { useTypingGameStartTrigger } from "../hooks/useTypingGameStartTrigger";

export const TypingGamePage: FC = memo(() => {
  const { typingGameStartFlag, typingGameStartTrigger } = useTypingGameStartTrigger();
  const { typingGameData, getTypingGameData } = useGetTypingGameData();
  const { correctFlag, reloadFlag, matchingAnswer, initCorrectFlag, reload } = useMatchingAnswer();
  const { timeLimit, startTimer, initTimeLimit } = useStartTimer();
  // const { sleep } = useSleep();
  const [typingGameDataIndex, setTypingGameDataIndex] = useState<number>(0);
  const [typingGameEndFlag, setTypingGameEndFlag] = useState<boolean>(false);
  let navigate = useNavigate();

  const fistSetTypingGameData = useCallback(async () => {
    await getTypingGameData();
    setTypingGameDataIndex(0);
  }, [])

  useEffect(() => {
    fistSetTypingGameData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    console.log(400);
    setTypingGameDataIndex(prev => prev + 1);
    console.log(typingGameDataIndex);
    // if (typingGameDataIndex > 0 && typingGameDataIndex < typingGameData.length) {
    //   setTypingGameDataIndex(typingGameDataIndex + 1);
    //   // startTimer();
    // }
    if (typingGameDataIndex >= 9) {
      setTypingGameDataIndex(0);
      navigate("/home");
    }
    // if (timeLimit <= 0) {
    //   initTimeLimit();
    // }
    // initTimeLimit();
    // if (counter >= (10 - 1)) { // 10をtypingGameData.lengthに変換
    //   console.log("stop");
    //   setTypingGameEndFlag(true);
    // }
  }, [reloadFlag]);

  // console.log("TypingGamePageレンダリングされました。")

  return (
    <div className="overflow-x-hidden">
      <Header />
      <div className="bg-zinc-900 py-12">
        <div className="box-border border-4 rounded-3xl outline-none w-2/3 px-8 py-12 mx-auto my-24 text-center shadow-lg shadow-zinc-500 relative">
          {typingGameStartFlag ? (
            <div>
            {typingGameEndFlag ? (
              <TypingGameEndScreen />
            ) : (
                  <TypingGameScreen question={typingGameData[typingGameDataIndex].question} answer={typingGameData[typingGameDataIndex].answer} correctFlag={correctFlag} initCorrectFlag={initCorrectFlag} onSubmit={matchingAnswer} initTimeLimit={initTimeLimit} reload={reload} />
              )}
              </div>
          ) : (
            <TypingGameStartScreen onKeyDown={(e: any) => typingGameStartTrigger(e)} />
          )}
          {/* <TimeBar timeLimit={timeLimit} /> */}
        </div>
      </div>
      <Footer />
    </div>
  )
})
