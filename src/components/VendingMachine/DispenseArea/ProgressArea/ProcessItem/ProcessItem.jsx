import { memo } from "react";

const ProcessItem = ({ process }) => {
  return <p>{process}</p>;
};

export default memo(ProcessItem);
