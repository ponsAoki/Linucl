import { FC, memo, useEffect } from "react";

import { Footer, Header } from "../components/organisms/layout";
import { useGetQuizData } from "../hooks/api/useGetQuizData";
import { useMatchingQuizAnswer } from "../hooks/useMatchingQuizAnswer";
import { useStartTimer } from "../hooks/useStartTimer";

export const QuizPage: FC = memo(() => {
  const { quizQuestion, quizAnswer, quizSelects, getQuizData } = useGetQuizData();
  const { timeLimit, startTimer } = useStartTimer();
  const { matchingQuizAnswer } = useMatchingQuizAnswer();

  useEffect(() => {
    getQuizData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="overflow-x-hidden">
      <Header />
      <div className="bg-gray-100 py-16">
        <div className="box-border border-4 rounded-lg outline-none w-2/3 px-8 py-12 mx-auto my-24 text-center">
          <p className="text-2xl mb-12">{quizQuestion}</p>
          <div>
            {/* 取得するデータの形式が決まったらbuttonをコンポーネント化する */}
            <button
              className="bg-black text-white rounded p-4 hover:opacity-70 font-bold text-2xl m-6 md:mx-6 md:inline block mx-auto"
              onClick={() => matchingQuizAnswer(quizSelects[0], quizAnswer)}
            >
              <div className="flex w-96">
                <span className="">1.</span>
                <span className="mx-auto">{quizSelects[0]}</span>
              </div>
            </button>
            <button
              className="bg-black text-white rounded p-4 hover:opacity-70 font-bold text-2xl m-6 md:mx-6 md:inline block mx-auto"
              onClick={() => matchingQuizAnswer(quizSelects[1], quizAnswer)}
            >
              <div className="flex w-96">
                <span className="">2.</span>
                <span className="mx-auto">{quizSelects[1]}</span>
              </div>
            </button>
            <button
              className="bg-black text-white rounded p-4 hover:opacity-70 font-bold text-2xl m-6 md:mx-6 md:inline block mx-auto"
              onClick={() => matchingQuizAnswer(quizSelects[2], quizAnswer)}
            >
              <div className="flex w-96">
                <span className="">3.</span>
                <span className="mx-auto">{quizSelects[2]}</span>
              </div>
            </button>
            <button
              className="bg-black text-white rounded p-4 hover:opacity-70 font-bold text-2xl m-6 md:mx-6 md:inline block mx-auto"
              onClick={() => matchingQuizAnswer(quizSelects[3], quizAnswer)}
            >
              <div className="flex w-96">
                <span className="">4.</span>
                <span className="mx-auto">{quizSelects[3]}</span>
              </div>
            </button>
          </div>
          <div className="mt-24 bg-gray-400 rounded h-6 mx-4">
            <div
              style={{
                transform: `scale(${1 - timeLimit / 10}, 1)`,
                transformOrigin: "left"
              }}
              className="bg-blue-500 rounded h-6"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
})
