import { FC, memo } from "react";
import { Footer, Header } from "../components/organisms/layout";

export const TopPage: FC = memo(() => {
  return (
    <div>
      <Header />
      <div>TopPage</div>
      <Footer />
    </div>
  )
})
