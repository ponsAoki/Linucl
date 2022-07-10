import { FC, memo } from "react";

import { Footer, Header } from "../components/organisms/layout";
import { LessonBox } from "../components/organisms/LessonBox";

export const HomePage: FC = memo(() => {
  return (
    <div className="overflow-x-hidden">
      <Header />
        <div className="bg-zinc-900 py-12">
          <ul>
            <li>
            <LessonBox outline="レベル1" content="アプリケーション開発中に頻繁に使用するコマンド" />
            <LessonBox outline="レベル2" content="覚えておくと便利なコマンド" />
            <LessonBox outline="レベル3" content="上級レベルのコマンド" />
            </li>
          </ul>
        </div>
      <Footer />
    </div>
  )
})
