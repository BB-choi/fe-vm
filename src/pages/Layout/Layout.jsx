import React from "react";

import Navbar from "components/Navbar/NavBar";
import cash from "mockData/money";
import { Outlet } from "react-router-dom";

import { Wrap, Main } from "./Layout.styled";

export const MoneyContext = React.createContext(cash);

const Layout = ({ menusData }) => {
  return (
    <Wrap>
      <nav className="gnb">
        <Navbar menusData={menusData} />
      </nav>

      <Main>
        <MoneyContext.Provider value={cash}>
          <Outlet />
        </MoneyContext.Provider>
      </Main>
    </Wrap>
  );
};

export default Layout;
