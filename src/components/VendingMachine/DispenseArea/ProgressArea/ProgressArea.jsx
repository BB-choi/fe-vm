import { useContext } from "react";

import { ProcessContext } from "contexts/processContext";

import ProcessItem from "./ProcessItem/ProcessItem";
import Wrapper from "./ProgressArea.styled";

const createKey = (value, idx) => value + idx;

const ProgressArea = () => {
  const { process } = useContext(ProcessContext);

  return (
    <Wrapper>
      {process.map((curProcess, idx) => (
        <ProcessItem process={curProcess} key={createKey(curProcess, idx)} />
      ))}
    </Wrapper>
  );
};

export default ProgressArea;
