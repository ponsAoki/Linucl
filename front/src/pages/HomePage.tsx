import { FC, memo } from "react";
import { Footer, Header } from "../components/organisms/layout";

export const HomePage: FC = memo(() => {
  return (
    <div>
      <Header />
      <div>HomePage</div>
      <Footer />
    </div>
  )
})
