import PageTitle from "src/components/pagetitle";

export default function Home() {
  return (
    <div className="container">
      <div className="w-full h-header bg-snow-900"></div>
      <div className="flex flex-row w-full h-full">
        <div className="flex w-full sm:w-[72px] h-[48px] sm:h-screen bg-snow-800" />
        <div className="flex flex-col py-8 px-20 w-full h-full">
          <PageTitle title="ホーム" subtitle="TeamName" />
          <div className="flex flex-shrink-0 w-full h-full bg-snow-800"></div>
        </div>
      </div>
    </div>
  );
}
