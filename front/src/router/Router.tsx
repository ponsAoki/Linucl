import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";
import { Contact, HomePage, Page404, QuizPage, SignIn, SignUp, TopPage, TypingGamePage } from "../pages";

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<TopPage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="home" element={<HomePage />} />
        <Route path="quiz" element={<QuizPage />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="typing-game" element={<TypingGamePage />} />
        <Route path="*" element={<Page404 />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  )
})
