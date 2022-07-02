import { FC, memo } from "react";
import { Footer, Header } from "../components/organisms/layout";

export const TypingGamePage: FC = memo(() => {
  return (
    <div>
      <Header />
      <div className="bg-gray-100 py-16">
        <div className="box-border border-4 rounded-lg outline-none w-2/3 px-8 py-12 mx-auto my-16 text-center">
          <p className="text-2xl mb-12">問題文</p>
          <input
            type="text"
            placeholder="解答欄"
            className="outline-none rounded-md text-center text-3xl my-12"
          />
          <div className="mt-12">タイムゲージ</div>
        </div>
      </div>
      <Footer />
    </div>
  )
})
