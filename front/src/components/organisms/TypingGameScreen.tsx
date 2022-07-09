import { FC, FormEvent, memo, RefObject, useRef } from "react";

type Props = {
  problem: string;
  correctCommand: string;
  correctFlag: boolean | null;
  onSubmit: (e: FormEvent<HTMLFormElement>, correctCommand: string, ref: RefObject<HTMLInputElement>) => void;
}

export const TypingGameScreen: FC<Props> = memo((props) => {
  const { problem, correctCommand, correctFlag, onSubmit: matchingAnswer } = props;
  const ref: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null);
  console.log("レンダリングされました！")
  console.log(correctFlag);
  return (
    <div>
      <h3 className="text-2xl mb-12 text-white">{problem}</h3>
      <form method="post" onSubmit={ async (e: FormEvent<HTMLFormElement>) => {
        matchingAnswer(e, correctCommand, ref);    // 処理を全部抜けた時にuseStateで変更した値をconsole.logで表示できる
      }}>
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
                    value="miss"
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
