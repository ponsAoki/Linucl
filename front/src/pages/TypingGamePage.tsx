import { FC, FormEvent, FormEventHandler, memo, RefObject, useEffect, useRef } from "react";

import { Footer, Header } from "../components/organisms/layout";
import { useGetTypingGameData } from "../hooks/useGetTypingGameData";
import { useStartTimer } from "../hooks/useStartTimer";

export const TypingGamePage: FC = memo(() => {
  const { problem, correctCommand, getTypingGameData } = useGetTypingGameData();
  const { timeLimit, startTimer } = useStartTimer();
  const ref: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);

  const matchingAnswer: FormEventHandler<HTMLFormElement> = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    ref.current?.value === correctCommand ? console.log(true) : console.log(false);
  }

  useEffect(() => {
    getTypingGameData()
      .then(() => startTimer());
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Header />
      <div className="bg-gray-100 py-16">
        <div className="box-border border-4 rounded-lg outline-none w-2/3 px-8 py-12 mx-auto my-24 text-center">
          <p className="text-2xl mb-12">{problem}</p>
            <form method="post" onSubmit={matchingAnswer}>
              <div className="bg-black flex items-center h-24 w-full px-2">
                <p className="text-white text-4xl">guest@localhost&nbsp;~&nbsp;$</p>
                <input
                  type="text"
                  name="answer"
                  autoFocus={true}
                  className="outline-none bg-black text-start text-white w-full text-4xl mr-auto pl-2"
                  ref={ref}
                />
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
