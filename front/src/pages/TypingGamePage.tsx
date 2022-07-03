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
          <div className="mt-12">タイムゲージ</div>
        </div>
      </div>
      <Footer />
    </div>
  )
})
