import { useContext } from "react";

import MoneyItem from "components/Wallet/MoneyItem/MoneyItem";
import TotalMoneyArea from "components/Wallet/TotalMoneyArea/TotalMoneyArea";
import { MoneyContext, setMoneyContext } from "pages/Layout/Layout";

import Wrapper from "./Wallet.styled";

const Wallet = () => {
  const { cashData } = useContext(MoneyContext);
  const handleClickButton = useContext(setMoneyContext);

  const walletItems = cashData.map(({ money }, idx) => {
    return (
      <MoneyContext.Provider value={cashData[idx]} key={money}>
        <MoneyItem onClick={() => handleClickButton(idx)} />
      </MoneyContext.Provider>
    );
  });

  return (
    <Wrapper>
      <ul>{walletItems}</ul>
      <TotalMoneyArea moneyData={cashData} />
    </Wrapper>
  );
};

export default Wallet;
