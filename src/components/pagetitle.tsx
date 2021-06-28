import React from "react";

type PageTitleProps = {
  title: string;
  subtitle: string;
};

const PageTitle = (props: PageTitleProps) => {
  return (
    <React.Fragment>
      <h1 className="">
        {props.title} - {props.subtitle}
      </h1>
      <hr className="h-2 border-red-500 border-solod" />
    </React.Fragment>
  );
};

export default PageTitle;
