import { NextPage } from "next";
import Layout from "src/components/shared/Layout";
import MemberPage from "src/components/memberPage";

const Index: NextPage = () => {
  return (
    <>
      <Layout>
        <div className="flex flex-grow py-6 md:px-6 pt-[100px] lg:pr-[128px] lg:pb-[128px] lg:pl-[80px] lg:w-full max-w-7xl">
          {/* Replace with your content */}
          <MemberPage />
          {/* /End replace */}
        </div>
      </Layout>
    </>
  );
};

export default Index;
