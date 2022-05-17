import { createContext, useCallback, useMemo, useState } from "react";

export const ProcessContext = createContext([]);
export const SetProcessContext = createContext(() => {});

const ProcessProvider = ({ children }) => {
  const [process, setProcess] = useState([]);

  const updateProcess = useCallback((newProcess) => {
    setProcess((prevProcess) => {
      return [newProcess, ...prevProcess];
    });
  }, []);

  const currentProcess = useMemo(
    () => ({
      process,
    }),
    [process]
  );

  return (
    <SetProcessContext.Provider value={updateProcess}>
      <ProcessContext.Provider value={currentProcess}>
        {children}
      </ProcessContext.Provider>
    </SetProcessContext.Provider>
  );
};

export default ProcessProvider;
