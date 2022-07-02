import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage, Page404, QuizPage, TopPage, TypingGamePage } from "../pages";

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<TopPage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="quiz" element={<QuizPage />} />
        <Route path="typing-game" element={<TypingGamePage />} />
        <Route path="*" element={<Page404 />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  )
})
