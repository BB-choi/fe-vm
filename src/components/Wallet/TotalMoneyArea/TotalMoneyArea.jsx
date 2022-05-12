import { Wrapper, MoneyArea, P } from "./TotalMoneyArea.styled";

const TOTAL_MONEY_NAME = "총액";

const computeTotalMoney = (moneyData) => {
  const INITIAL_VALUE = 0;

  return moneyData.reduce((prev, cur) => {
    const [money, amount] = cur;
    return prev + money * amount;
  }, INITIAL_VALUE);
};

const TotalMoneyArea = ({ moneyData }) => {
  const totalMoney = computeTotalMoney(moneyData);

  return (
    <Wrapper>
      <P>{TOTAL_MONEY_NAME}</P>
      <MoneyArea>{totalMoney}</MoneyArea>
    </Wrapper>
  );
};

export default TotalMoneyArea;
