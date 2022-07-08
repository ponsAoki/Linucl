import { FC, FormEvent, memo, RefObject, useEffect, useRef } from "react";

import { Footer, Header } from "../components/organisms/layout";
import { useGetTypingGameData } from "../hooks/useGetTypingGameData";
import { useMatchingAnswer } from "../hooks/useMatchingAnswer";
import { useStartTimer } from "../hooks/useStartTimer";

export const TypingGamePage: FC = memo(() => {
  const { problem, correctCommand, getTypingGameData } = useGetTypingGameData();
  const { correctFlag, matchingAnswer } = useMatchingAnswer();
  const { timeLimit, startTimer } = useStartTimer();
  const ref: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

  useEffect(() => {
    getTypingGameData()
      .then(() => startTimer());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Header />
      <div className="bg-zinc-900 py-12">
        <div className="box-border border-4 rounded-3xl outline-none w-2/3 px-8 py-12 mx-auto my-24 text-center shadow-lg shadow-zinc-500">
          <h3 className="text-2xl mb-12 text-white">{problem}</h3>
            <form method="post" onSubmit={(e: FormEvent<HTMLFormElement>) => matchingAnswer(e, correctCommand, ref)}>
              <div className="bg-black h-32 w-full px-2 border-4 rounded border-gray-500">
                <ul className="items-center">
                  <li className="flex my-3">
                    <p className="text-white text-4xl">guest@localhost&nbsp;~&nbsp;$</p>
                    <input
                      type="text"
                      name="answer"
                      readOnly={correctFlag ?? false}
                      autoFocus={true}
                      autoComplete="off"
                      className="outline-none bg-black text-start text-white w-full text-4xl mr-auto pl-2 overflow-y-hidden"
                      ref={ref}
                    />
                  </li>
                  {correctFlag === null ? (
                    <li className="flex my-3">a</li>
                    ) : (
                      correctFlag ? (
                        <li className="flex my-3">
                          <p className="text-white text-4xl">guest@localhost&nbsp;~&nbsp;$</p>
                          <input
                            type="text"
                            name="answer"
                            readOnly={true}
                            value="correct!"
                            className="outline-none bg-black text-start text-green-500 w-full text-4xl mr-auto pl-2 overflow-y-hidden"
                          />
                        </li>
                      ) : (
                        <li className="flex my-3">
                          <p className="text-white text-4xl">guest@localhost&nbsp;~&nbsp;$</p>
                          <input
                            type="text"
                            name="answer"
                            readOnly={true}
                            value="miss"
                            className="outline-none bg-black text-start text-red-500 w-full text-4xl mr-auto pl-2 overflow-y-hidden"
                          />
                        </li>
                      )
                    )
                  }
                </ul>
              </div>
            </form>
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
