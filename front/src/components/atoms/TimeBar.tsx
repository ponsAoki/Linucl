import { FC, memo } from "react";

type Props = {
  timeLimit: number;
}

export const TimeBar: FC<Props> = memo((props) => {
  const { timeLimit } = props;
  return (
    <div className="mt-24 bg-gray-400 rounded h-6 mx-4">
      <div
        style={{
          transform: `scale(${1 - timeLimit / 10}, 1)`,
          transformOrigin: "left"
        }}
        className="bg-blue-500 rounded h-6"
      />
    </div>
  )
})
