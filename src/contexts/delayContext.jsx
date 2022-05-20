const { useState, createContext, useCallback } = require("react");

export const DelayContext = createContext(() => {});
export const SetDelayContext = createContext(() => {});

const DelayProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const setLoadingState = useCallback((newLoadingState) => {
    setIsLoading(() => newLoadingState);
  }, []);

  return (
    <SetDelayContext.Provider value={setLoadingState}>
      <DelayContext.Provider value={isLoading}>
        {isLoading && "hi"}
        {children}
      </DelayContext.Provider>
    </SetDelayContext.Provider>
  );
};

export default DelayProvider;
