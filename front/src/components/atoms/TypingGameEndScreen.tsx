import { FC, memo } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

export const TypingGameEndScreen: FC = memo(() => {
  let navigate: NavigateFunction = useNavigate();
  return (
    <div>
      <p className="text-white font-bold text-4xl mt-8 mb-16">終了</p>
      <button
        className="text-white font-bold w-48 rounded-lg bg-yellow-400 hover:bg-yellow-500 px-4 py-2 shadow-yellow2 opacity-90 hover:opacity-100"
        onClick={() => navigate("/home")}
      >
        レベル選択画面に戻る
      </button>
    </div>
  )
})
