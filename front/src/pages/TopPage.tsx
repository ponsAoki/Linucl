import { FC, memo } from "react";
import { NavigateFunction, useNavigate } from "react-router";
import { Link } from "react-router-dom";

import { Footer, Header } from "../components/organisms/layout";
import BackGroundImage from "../assets/images/BackGround.jpg";

export const TopPage: FC = memo(() => {
  let navigate: NavigateFunction = useNavigate();
  return (
    <div className="overflow-x-hidden">
      <Header />
      <div className="bg-black">
        <img src={BackGroundImage} alt="BackGroundImage" className="absolute w-screen h-screen" />
        <div
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          className="box-content w-full p-4 border-0 mx-auto justify-center relative h-screen"
        >
          <div className="text-center pt-12">
            <h1 className="text-white md:text-8xl sm:text-7xl text-6xl px-4 font-black">L&thinsp;I&thinsp;N&thinsp;U&thinsp;C&thinsp;L</h1>
            <ul className="my-12">
              <li className="my-8">
                <button
                  className="text-white font-black text-lg w-48 rounded-lg bg-yellow-400 shadow-yellow1 px-4 py-2 mb-4 hover:bg-yellow-500 hover:shadow-yellow2"
                  onClick={() => navigate("#")}
                >
                  ログイン
                </button>
              </li>
              <li>
                <button
                  className="text-white font-black text-lg w-48 rounded-lg bg-yellow-400 shadow-yellow1 px-4 py-2 mb-4 hover:bg-yellow-500 hover:shadow-yellow2"
                  onClick={() => navigate("/home")}
                >
                  ゲストで始める
                </button>
              </li>
            </ul>
            <div className="text-white">
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
