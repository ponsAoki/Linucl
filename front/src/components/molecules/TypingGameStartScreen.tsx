import { FC, memo } from "react";

type Props = {
  onKeyDown: (e: any) => void
}

export const TypingGameStartScreen: FC<Props> = memo((props) => {
  const { onKeyDown: typingGameStartTrigger } = props;
  return (
    <div className="mx-auto">
      <p className="text-white absolute top-0 left-0 w-full font-bold text-2xl mt-8">spaceキーを入力するとゲームが開始します!</p>
      <input
        name="startInput"
        title="startInput"
        autoFocus={true}
        type="text"
        className="absolute opacity-0 w-full h-full top-0 left-0 hover:cursor-pointer rounded"
        onKeyDown={(e: any) => typingGameStartTrigger(e)}
      />
    </div>
  )
})
