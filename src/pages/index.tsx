import { NextPage } from 'next';

const Index: NextPage = () => {
  return (
    <div>
      <div className="fixed top-0 z-40 w-full h-header bg-snow-900"></div>
      <div className="md:flex z-30 md:flex-row mt-header">
        <div className="hidden md:block md:w-[72px] md:h-menu bg-snow-900 "></div>
        <div className="w-full md:w-[230px] h-[48px] md:h-menu bg-night-900"></div>
        {/* <div className="w-[100px] h-[50px] bg-gray-100"></div> */}
      </div>
    </div>
  );
};

export default Index;
