import { FC, memo } from "react";

import { Footer, Header } from "../components/organisms/layout";
import { LessonBox } from "../components/organisms/LessonBox";

export const HomePage: FC = memo(() => {
  return (
    <div>
      <Header />
        <div className="bg-gray-100 py-16">
          <ul>
            <li>
            <LessonBox outline="レベル1" content="・・・" />
            <LessonBox outline="レベル2" content="・・・" />
            <LessonBox outline="レベル3" content="・・・" />
            </li>
          </ul>
        </div>
      <Footer />
    </div>
  )
})
