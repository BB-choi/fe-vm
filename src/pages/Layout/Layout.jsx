import React, { useCallback, useMemo, useState } from "react";

import Navbar from "components/Navbar/NavBar";
import cash from "mockData/money";
import { Outlet } from "react-router-dom";

import { Wrap, Main } from "./Layout.styled";

export const MoneyContext = React.createContext({});
export const setMoneyContext = React.createContext(() => {});

const Layout = ({ menusData }) => {
  const [cashData, setCashData] = useState(cash);
  const decreaseCashCount = useCallback(
    (indexNo) =>
      setCashData(
        cashData.map((current, i) => {
          if (i === indexNo) {
            return { money: current.money, count: current.count - 1 };
          }
          return current;
        })
      ),
    [cashData]
  );

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
