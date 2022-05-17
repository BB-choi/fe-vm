import { useContext } from "react";

import { ProcessContext } from "contexts/processContext";

import ProcessItem from "./ProcessItem/ProcessItem";
import Wrapper from "./ProgressArea.styled";

const ProgressArea = () => {
  const { process } = useContext(ProcessContext);

  return (
    <Wrapper>
      {process.map((curProcess) => (
        <ProcessItem process={curProcess} />
      ))}
    </Wrapper>
  );
};

export default ProgressArea;
