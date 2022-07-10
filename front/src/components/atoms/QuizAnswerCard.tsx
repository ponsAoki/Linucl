import { FC, memo } from "react";

type Props = {
  index: number;
  quizAnswer: string;
  quizSelect: string;
  matchingQuizAnswer: (quizAnswer: string, quizSelect: string) => void
}

export const QuizAnswerCard: FC<Props> = memo((props) => {
  const { index, quizAnswer, quizSelect, matchingQuizAnswer } = props;
  return (
    <button
      className="bg-black text-white rounded p-4 hover:opacity-70 font-bold text-2xl m-6 md:mx-6 md:inline block mx-auto"
      onClick={() => matchingQuizAnswer(quizSelect, quizAnswer)}
    >
      <div className="flex w-96">
        <span className="">{index+1}.</span>
        <span className="mx-auto">{quizSelect}</span>
      </div>
    </button>
  )
})
