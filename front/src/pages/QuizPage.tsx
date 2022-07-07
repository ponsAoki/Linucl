import { FC, memo, useEffect } from "react";

import { Footer, Header } from "../components/organisms/layout";
import { useGetQuizData } from "../hooks/useGetQuizData";
import { useStartTimer } from "../hooks/useStartTimer";

export const QuizPage: FC = memo(() => {
  const { getQuizData } = useGetQuizData();
  const { timeLimit, startTimer } = useStartTimer();

  useEffect(() => {
    getQuizData()
      .then(() => startTimer());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="overflow-x-hidden">
      <Header />
      <div className="bg-gray-100 py-16">
        <div className="box-border border-4 rounded-lg outline-none w-2/3 px-8 py-12 mx-auto my-24 text-center">
          <p className="text-2xl mb-12">テスト問題文</p>
          <div>
            {/* 取得するデータの形式が決まったらbuttonをコンポーネント化する */}
            <button
              className="bg-black text-white rounded p-4 hover:opacity-70 font-bold text-2xl m-6 md:mx-6 md:inline block mx-auto"
              onClick={() => console.log(1)}
            >
              <div className="flex w-96">
                <span className="">1.</span>
                <span className="mx-auto">mkdir</span>
              </div>
            </button>
            <button
              className="bg-black text-white rounded p-4 hover:opacity-70 font-bold text-2xl m-6 md:mx-6 md:inline block mx-auto"
              onClick={() => console.log(2)}
            >
              <div className="flex w-96">
                <span className="">2.</span>
                <span className="mx-auto">cat</span>
              </div>
            </button>
            <button
              className="bg-black text-white rounded p-4 hover:opacity-70 font-bold text-2xl m-6 md:mx-6 md:inline block mx-auto"
              onClick={() => console.log(3)}
            >
              <div className="flex w-96">
                <span className="">3.</span>
                <span className="mx-auto">touch</span>
              </div>
            </button>
            <button
              className="bg-black text-white rounded p-4 hover:opacity-70 font-bold text-2xl m-6 md:mx-6 md:inline block mx-auto"
              onClick={() => console.log(4)}
            >
              <div className="flex w-96">
                <span className="">4.</span>
                <span className="mx-auto">less</span>
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
