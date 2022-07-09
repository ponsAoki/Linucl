import { FC, FormEvent, memo, RefObject, useEffect, useRef } from "react";
import { useSleep } from "../../hooks/useSleep";

type Props = {
  question: string;
  answer: string;
  correctFlag: boolean | null;
  counter: number
  initCorrectFlag: () => void;
  onSubmit: (e: FormEvent<HTMLFormElement>, correctCommand: string, ref: RefObject<HTMLInputElement>) => void;
  initTimeLimit: () => void;
}

export const TypingGameScreen: FC<Props> = memo((props) => {
  const { question, answer, correctFlag, counter, initCorrectFlag, onSubmit: matchingAnswer, initTimeLimit } = props;
  const { sleep } = useSleep();
  const ref: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
  console.log("レンダリングされました！");

  useEffect(() => {
    setTimeout(() => {
      if (counter !== 0) {
      sleep(500)
        .then(() => {
          initCorrectFlag();
        })
      }
    }, 500);
  }, [correctFlag]);

  return (
    <div>
      <h3 className="text-2xl mb-12 text-white">{question}</h3>
      <form method="post" onSubmit={ async (e: FormEvent<HTMLFormElement>) => {
        matchingAnswer(e, answer, ref);    // 処理を全部抜けた時にuseStateで変更した値をconsole.logで表示できる
        initTimeLimit();
      }}>
        <div className="bg-black h-32 w-full px-2 border-4 rounded border-gray-500">
          <ul className="items-center">
            <li className="flex my-3">
              <p className="text-white text-4xl">guest@localhost&nbsp;~&nbsp;$</p>
              <input
                type="text"
                name="answer"
                readOnly={correctFlag ?? false}  // 最初の問題の初期値が" "になってしまう
                autoFocus={true}
                autoComplete="off"
                className="outline-none bg-black text-start text-white w-full text-4xl mr-auto pl-2 overflow-y-hidden"
                ref={ref}
              />
            </li>
            {correctFlag === null ? (
              <li className="flex my-3">aaaaaaaaaaaaa</li>
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
                    value={`miss  correctAnswer: ${answer}`}
                    className="outline-none bg-black text-start text-red-500 w-full text-4xl mr-auto pl-2 overflow-y-hidden"
                  />
                </li>
              )
            )}
          </ul>
        </div>
      </form>
    </div>
  )
})
