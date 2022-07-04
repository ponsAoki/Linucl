import { FC, memo } from "react";

export const Header: FC = memo(() => {
  return(
    <nav className="pl-2 py-4 bg-black">
      <h2 className="text-4xl text-white font-black ml-2">LINUCL</h2>
    </nav>
  )
})
