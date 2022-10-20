import { createRef, FC, memo, RefObject, useRef } from "react";
import { useSendSignInData } from "../hooks/auth/useSendSignInData";

export const SignUp: FC = memo(() => {
  const { sendSignInData } = useSendSignInData();
  const refs = useRef<RefObject<HTMLInputElement>[]>([]);
  const FormName = ["email", "password"]; // refを複数定義するために必要
  FormName.forEach((_, i) => {
    refs.current[i] = createRef();
  })

  return (
    <div className="h-screen justify-center flex items-center">
      <div className="box-border w-96 h-[32rem] px-16 py-12 border-4 rounded-xl">
        <h3 className="text-base font-medium">Authentication App</h3>
        <h2 className="text-xl mt-6 mb-8 font-bold">SignIn</h2>
        <form>
          <input
            type="email"
            name="email"
            required
            pattern="^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$"
            placeholder="メールアドレス"
            className="w-full px-4 py-2 mb-3 outline-none border-2 rounded-lg focus:border-sky-500"
            ref={refs.current[0]}
          />
          <input
            type="password"
            name="password"
            required
            pattern="\w{8,}"
            placeholder="パスワード"
            className="w-full px-4 py-2 mb-4 outline-none border-2 rounded-lg focus:border-sky-500"
            ref={refs.current[1]}
          />
          <button
            className="w-full rounded-lg py-2 bg-blue-500 text-white font-medium hover:opacity-80"
            onClick={() => sendSignInData(refs.current[0].current!.value, refs.current[1].current!.value)}
          >
            Sign in
          </button>
        </form>
        <div className="mt-6 text-sm text-gray-600 text-center">別の方法でログインする</div>
        <button className="mt-2 mb-4">sample</button>
        <div className="text-sm text-gray-600 text-center">アカウントをお持ちでない方はこちら</div>
      </div>
    </div>
  )
})
