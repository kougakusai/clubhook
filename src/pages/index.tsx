import { NextPage } from 'next';
import Layout from 'src/components/shared/Layout';

const Index: NextPage = () => {
  return (
    <>
      <Layout>
        <main className="flex-grow">
          <div className="py-6 md:px-6 lg:px-8 pt-[100px] lg:ml-[400px] lg:w-[500px] max-w-7xl">
            {/* Replace with your content */}
            <div className="py-6 px-4 lg:px-0">
              <div className="h-[1000px] rounded-lg border-4 border-gray-200 border-dashed" />
            </div>
            {/* /End replace */}
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Index;
