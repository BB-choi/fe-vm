import { useContext, useEffect, useRef } from "react";

import { ProcessContext } from "contexts/processContext";

import ProcessItem from "./ProcessItem/ProcessItem";
import { Wrapper, ProcessList } from "./ProgressArea.styled";

const createKey = (value, idx) => value + idx;

const ProgressArea = () => {
  const { process } = useContext(ProcessContext);

  const processEndRef = useRef();

  const scrollToBottom = () => {
    processEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  return (
    <Wrapper>
      <ProcessList ref={processEndRef}>
        {process.map((curProcess, idx) => (
          <ProcessItem process={curProcess} key={createKey(curProcess, idx)} />
        ))}
      </ProcessList>
    </Wrapper>
  );
};

export default ProgressArea;
