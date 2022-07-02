import { FC, memo } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

type Props = {
  outline: string;
  content: string;
}

export const LessonBox: FC<Props> = memo((props) => {
  const { outline, content } = props;
  let navigate: NavigateFunction = useNavigate();
  return (
    <div className="box-border border-4 rounded-lg outline-none w-1/2 mx-auto my-16 text-center">
      <h3 className="text-3xl font-bold my-6">{outline}</h3>
      <p className="px-8 my-6">{content}</p>
      <div className="flex justify-around my-6">
        <button
          className="text-white font-bold w-48 rounded-lg bg-blue-400 px-4 py-2 hover:opacity-80"
          onClick={() => navigate("/typing-game")}
        >タイピングゲーム</button>
        <button
          className="text-white font-bold w-48 rounded-lg bg-blue-400 px-4 py-2 hover:opacity-80"
          onClick={() => navigate("/quiz")}
        >クイズ</button>
      </div>
    </div>
  )
})
