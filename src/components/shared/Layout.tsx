import type { ReactNode, VFC } from "react";
import Header from "src/components/shared/Header";

type Props = {
  children: ReactNode;
};

const Layout: VFC<Props> = (props) => {
  const { children } = props;
  return (
    <div className="pb-20">
      <Header />
      <div className="lg:flex lg:flex-row">
        <div className="flex lg:w-[400px]" />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
