import type { ReactNode, VFC } from 'react';
import Header from 'src/components/shared/Header';

type Props = {
  children: ReactNode;
};

const Layout: VFC<Props> = (props) => {
  const { children } = props;
  return (
    <div className="pb-20">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
