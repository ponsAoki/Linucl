import { FC, memo } from "react";

import { Footer, Header } from "../components/organisms/layout";

export const Contact: FC = memo(() => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <div className="bg-zinc-900 py-8 h-full">
        <div className="container mx-auto my-4">
          <h1 className="text-gray-200 text-center text-4xl font-bold my-4">お問い合わせ</h1>
          <form action="#" acceptCharset="UTF-8" method="post" className="px-60">
            <div className="mb-6">
              <div className="flex text-gray-200 my-2">
                <label className="text-xl font-bold mr-6">カテゴリ</label>
                <div className="rounded bg-red-600 px-1 font-medium">必須</div>
              </div>
              <select name="" id="" size={1} className="outline-none p-2 rounded">
                <option value="">バグや問題に関する報告</option>
                <option value="">機能追加をリクエスト</option>
                <option value="">その他のご質問・ご要望</option>
              </select>
            </div>
            <div className="mb-6">
              <div className="flex text-gray-200 my-2">
                <label className="text-xl font-bold mr-6">名前</label>
                <div className="rounded bg-blue-600 px-1 font-medium">任意</div>
              </div>
              <input type="text" className="outline-none p-2 rounded w-full" />
            </div>
            <div className="mb-6">
              <div className="flex text-gray-200 my-2">
                <label className="text-xl font-bold mr-6">メールアドレス</label>
                <div className="rounded bg-blue-600 px-1 font-medium">任意</div>
              </div>
              <input type="text" className="outline-none p-2 rounded w-full" />
            </div>
            <div>
              <div className="flex text-gray-200 my-2">
                <label className="text-xl font-bold mr-6">お問い合わせ内容</label>
                <div className="rounded bg-red-600 px-1 font-medium">必須</div>
              </div>
              <textarea name="content" id="content" rows={4} wrap="soft" className="outline-none p-2 rounded w-full" />
            </div>
            <div className="mt-4 text-center">
              <input type="submit" name="submit" value="送信" className="bg-gray-800 text-gray-200 border-white rounded outline-none border-2 px-2 py-1" />
            </div>
          </form>
        </div>
        </div>
      <Footer />
    </div>
  )
})
