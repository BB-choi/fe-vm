import { memo, useContext } from 'react';

import Button from 'components/common/form/Button/Button';
import { setMoneyContext } from 'pages/Layout/Layout';

import { MoneyLi, moneyButtonStyle } from './MoneyItem.styled';

const Count = ({ data }) => {
  return <p className="count">{data}</p>;
};

const MoneyItem = ({ money, count }) => {
  const handleClickButton = useContext(setMoneyContext);

  return (
    <MoneyLi>
      <Button
        className="money"
        data={{ name: money }}
        styles={moneyButtonStyle}
        isDisabled={!count}
        onClick={() => handleClickButton(money)}
      />
      <Count data={count} />
    </MoneyLi>
  );
};

export default memo(MoneyItem);
