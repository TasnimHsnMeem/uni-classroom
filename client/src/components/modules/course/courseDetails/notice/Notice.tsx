import React from "react";

type Props = {
  notice: string;
};

const Notice = (props: Props) => {
  const { notice } = props;
  return <div>{notice}</div>;
};

export default Notice;
