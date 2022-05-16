import React, { useCallback, useMemo, useState } from "react";

import Navbar from "components/Navbar/NavBar";
import cash from "mockData/money";
import { Outlet } from "react-router-dom";

import { Wrap, Main } from "./Layout.styled";

export const MoneyContext = React.createContext({});
export const setMoneyContext = React.createContext(() => {});

const Layout = ({ menusData }) => {
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
    <Wrap>
      <nav className="gnb">
        <Navbar menusData={menusData} />
      </nav>

      <Main>
        <setMoneyContext.Provider value={decreaseCashCount}>
          <MoneyContext.Provider value={money}>
            <Outlet />
          </MoneyContext.Provider>
        </setMoneyContext.Provider>
      </Main>
    </Wrap>
  );
};

export default Layout;
