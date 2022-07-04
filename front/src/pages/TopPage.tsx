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
              <li>
                <button
                  className="text-white font-bold w-48 rounded-lg bg-blue-400 px-4 py-2 mb-4 hover:opacity-80"
                  onClick={() => navigate("#")}
                >
                  ログイン
                </button>
                {/* <button
                  className="relative flex justify-center items-center mx-auto my-8 bg-blue-500 text-white font-bold rounded duration-75 ease-in-out shadow-[0_5px_0_#4f96f6, 0_10px_100px_#4f96f6]" 
                  onClick={() => navigate("#")}
                >
                  ログイン
                </button> */}
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
