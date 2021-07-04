type PageTitleProps = {
  title: string;
  subtitle: string;
};

const PageTitle = (props: PageTitleProps) => {
  return (
    <div className="flex flex-col w-full h-[106px]">
      <h1>
        {props.title} - {props.subtitle}
      </h1>
      <hr />
    </div>
  );
};

export default PageTitle;
