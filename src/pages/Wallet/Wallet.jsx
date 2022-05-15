import { useContext } from "react";

import MoneyItem from "components/Wallet/MoneyItem/MoneyItem";
import TotalMoneyArea from "components/Wallet/TotalMoneyArea/TotalMoneyArea";
import { MoneyContext } from "pages/Layout/Layout";

import Wrapper from "./Wallet.styled";

const Wallet = () => {
  const currentMoney = useContext(MoneyContext);

  return (
    <Wrapper>
      <ul>
        {currentMoney.map(({ money }, idx) => (
          <MoneyContext.Provider value={currentMoney[idx]} key={money}>
            <MoneyItem />
          </MoneyContext.Provider>
        ))}
      </ul>
      <TotalMoneyArea moneyData={currentMoney} />
    </Wrapper>
  );
};

export default Wallet;
