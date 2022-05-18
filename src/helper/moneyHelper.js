const INITIAL_MONEY = 0;

const moneyHelper = {
  computeTotalMoney(moneyArr) {
    return moneyArr.reduce((prev, { money }) => prev + money, INITIAL_MONEY);
  },
};

export default moneyHelper;
