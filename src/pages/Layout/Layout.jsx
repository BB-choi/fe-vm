import { createContext, useCallback, useMemo, useState } from "react";

import Navbar from "components/Navbar/NavBar";
import cash from "mockData/money";
import { Outlet } from "react-router-dom";

import { Wrap, Main } from "./Layout.styled";

export const MoneyContext = createContext({});
export const SetMoneyContext = createContext(() => {});

const MoneyProvider = ({ children }) => {
  const [cashData, setCashData] = useState(cash);

  const decreaseCashCount = useCallback((money) => {
    setCashData((prevCashData) => {
      return prevCashData.map((current) => {
        if (current.money === money) {
          return { ...current, count: current.count - 1 };
        }
        return current;
      });
    });
  }, []);

  const money = useMemo(
    () => ({
      cashData,
    }),
    [cashData]
  );

  return (
    <SetMoneyContext.Provider value={decreaseCashCount}>
      <MoneyContext.Provider value={money}>{children}</MoneyContext.Provider>
    </SetMoneyContext.Provider>
  );
};

const Layout = ({ menusData }) => {
  return (
    <Wrap>
      <nav className="gnb">
        <Navbar menusData={menusData} />
      </nav>

      <Main>
        <MoneyProvider>
          <Outlet />
        </MoneyProvider>
      </Main>
    </Wrap>
  );
};

export default Layout;
