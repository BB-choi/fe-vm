import { useContext } from "react";

import MoneyItem from "components/Wallet/MoneyItem/MoneyItem";
import TotalMoneyArea from "components/Wallet/TotalMoneyArea/TotalMoneyArea";
import { MoneyContext } from "pages/Layout/Layout";

import Wrapper from "./Wallet.styled";

const Wallet = () => {
  const { cashData } = useContext(MoneyContext);

  const walletItems = cashData.map(({ money, count }) => {
    return <MoneyItem key={money} money={money} count={count} />;
  });

  return (
    <Wrapper>
      <ul>{walletItems}</ul>
      <TotalMoneyArea moneyData={cashData} />
    </Wrapper>
  );
};

export default Wallet;
