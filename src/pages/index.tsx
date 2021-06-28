import PageTitle from "src/components/pagetitle";

export default function Home() {
  return (
    <div className="container">
      <div className="w-full h-header bg-snow-900"></div>
      <div className="w-10 h-10 bg-black" />
      <div className="w-full sm:w-[72px] h-[48px] sm:h-screen bg-snow-800">
        <div className="flex w-full h-full">
          <PageTitle title="ホーム" subtitle="TeamName" />
        </div>

        <div className="w-[17px] h-[17px] bg--500">a</div>
      </div>
    </div>
  );
}
