import { FC, memo, useEffect } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

import { QuizAnswerCard } from "../components/atoms/QuizAnswerCard";
import { Footer, Header } from "../components/organisms/layout";
import { useGetQuizData } from "../hooks/api/useGetQuizData";
import { useMatchingQuizAnswer } from "../hooks/useMatchingQuizAnswer";

export const QuizPage: FC = memo(() => {
  const { quizQuestion, quizAnswer, quizSelects, getQuizData } = useGetQuizData();
  const { quizDataReloadFlag, quizCorrectFlag, matchingQuizAnswer } = useMatchingQuizAnswer();
  let navigate: NavigateFunction = useNavigate();

  useEffect(() => {
    getQuizData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quizDataReloadFlag, matchingQuizAnswer])

  return (
    <div className="overflow-x-hidden">
      <Header />
      <div className="bg-zinc-900 py-12">
        <div className="box-border border-4 rounded-lg outline-none w-2/3 px-8 py-12 mx-auto mt-12 mb-12 text-center shadow-lg shadow-zinc-500">
          <p className="text-white text-3xl mb-12">{quizQuestion}</p>
          <div>
            {quizSelects.map((quizSelect, i) => (
              <QuizAnswerCard key={i} index={i} quizAnswer={quizAnswer} quizSelect={quizSelect} matchingQuizAnswer={matchingQuizAnswer} />
            ))}
          </div>
          {quizCorrectFlag === null ? (
            <></>
          ) : (
            quizCorrectFlag ? (
              <div className="text-green-500 text-3xl text-bold mt-12">correct</div>
            ) : (
              <div className="text-red-500 text-3xl text-bold mt-12">miss</div>
            )
          )}
        </div>
        <div className="text-center">
          <button
            className="text-white font-bold w-48 rounded-lg bg-sky-400 hover:bg-sky-500 px-4 py-2 shadow-sky2 opacity-90 hover:opacity-100 mb-8"
            onClick={() => navigate("/home")}
          >
            終了する
          </button>
        </div>
      </div>
      <Footer />
    </div>
  )
})
