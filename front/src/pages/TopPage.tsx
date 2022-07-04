import { FC, memo } from "react";
import { NavigateFunction, useNavigate } from "react-router";
import { Link } from "react-router-dom";

import { Footer, Header } from "../components/organisms/layout";

export const TopPage: FC = memo(() => {
  let navigate: NavigateFunction = useNavigate();
  return (
    <div>
      <Header />
      <div className="bg-gray-100 py-16">
        <div className="box-content w-64 p-4 border-0 mx-auto justify-center">
          <div className="text-center">
            <h1 className="font-black text-7xl px-4">Linucl</h1>
            <ul className="my-12">
              <li>
                <button className="text-white font-bold w-48 rounded-lg bg-blue-400 px-4 py-2 mb-4 hover:opacity-80">ログイン</button>
              </li>
              <li>
                <button
                  className="text-white font-bold w-48 rounded-lg bg-blue-400 px-4 py-2 hover:opacity-80"
                  onClick={() => navigate("/home")}
                >
                  ゲストで始める
                </button>
              </li>
            </ul>
            <div>
              登録は
                <Link to="#" className="text-blue-500 hover:opacity-80">こちら</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
})
