import { memo, useContext } from "react";

import Button from "components/common/form/Button/Button";
// import { setMoneyContext } from "pages/Layout/Layout";
import { SetMoneyContext } from "pages/Layout/Layout";

import { MoneyLi, moneyButtonStyle } from "./MoneyItem.styled";

const Count = ({ data }) => {
  return <p className="count">{data}</p>;
};

const MoneyItem = ({ money, count }) => {
  const decreaseCashCount = useContext(SetMoneyContext);

  return (
    <MoneyLi>
      <Button
        className="money"
        data={{ name: money }}
        styles={moneyButtonStyle}
        isDisabled={!count}
        onClick={() => decreaseCashCount(money)}
      />
      <Count data={count} />
    </MoneyLi>
  );
};

export default memo(MoneyItem);
