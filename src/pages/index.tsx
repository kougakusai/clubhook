import { NextPage } from "next";
import Layout from "src/components/shared/Layout";
import MemberPage from "src/components/memberPage";

const Index: NextPage = () => {
  return (
    <>
      <Layout>
        <main className="flex-grow">
          <div className="py-6 md:px-6 lg:px-8 pt-[100px] lg:ml-[400px] lg:w-full max-w-7xl">
            {/* Replace with your content */}
            <MemberPage />
            {/* /End replace */}
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Index;
