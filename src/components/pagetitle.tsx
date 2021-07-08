import type { VFC } from "react";

type Props = {
  title: string;
  subtitle?: string;
};

const PageTitle: VFC<Props> = (props) => {
  return (
    <div className="flex flex-col w-full h-[106px]">
      <h1 className="mb-8 font-bold">
        {props.subtitle ? `${props.title} - ${props.subtitle}` : props.title}
      </h1>
      <hr />
    </div>
  );
};

export default PageTitle;
