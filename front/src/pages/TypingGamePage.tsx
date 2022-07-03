import { FC, FormEvent, FormEventHandler, memo, RefObject, useEffect, useRef } from "react";
import { Footer, Header } from "../components/organisms/layout";
import { useGetTypingGameData } from "../hooks/useGetTypingGameData";

export const TypingGamePage: FC = memo(() => {
  const { problem, correctCommand, getTypingGameData } = useGetTypingGameData();
  const ref: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
  const matchingAnswer: FormEventHandler<HTMLFormElement> = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    ref.current?.value === correctCommand ? console.log(true) : console.log(false);
  }

  useEffect(() => {
    getTypingGameData();
  }, []);

  return (
    <div>
      <Header />
      <div className="bg-gray-100 py-16">
        <div className="box-border border-4 rounded-lg outline-none w-2/3 px-8 py-12 mx-auto my-16 text-center">
          <p className="text-2xl mb-12">{problem}</p>
          <form method="post" onSubmit={matchingAnswer}>
            <input
              type="text"
              name="answer"
              placeholder="解答欄"
              className="outline-none rounded-md text-center text-3xl my-12"
              ref={ref}
            />
          </form>
          <div className="mt-12">タイムゲージ</div>
        </div>
      </div>
      <Footer />
    </div>
  )
})
