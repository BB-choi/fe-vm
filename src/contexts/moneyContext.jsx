import { createContext, useMemo, useState } from "react";

import moneyHelper from "helper/moneyHelper";
import cash from "mockData/money";
import constants from "utils/constants";

const { INCREASE_COUNT, DECREASE_COUNT, MONEY_ARR_DESC_ORDER, INITIAL_COUNT } =
  constants;
const { computeTotalMoney } = moneyHelper;

export const MoneyContext = createContext(() => {});
export const MoneyActionsContext = createContext({});
export const InsertedMoneyContext = createContext(() => {});

const MoneyProvider = ({ children }) => {
  const [cashData, setCashData] = useState(cash);
  const [insertedMoney, setInsertedMoney] = useState([]);

  const decreaseCashCount = (money, decreaseCount = DECREASE_COUNT) => {
    setCashData((prevCashData) =>
      prevCashData.map((current) => {
        if (current.money === money) {
          return { ...current, count: current.count - decreaseCount };
        }
        return current;
      })
    );
  };

  const insertMoney = (currentMoney) => {
    setInsertedMoney((prevInsertedMoney) => [
      ...prevInsertedMoney,
      { money: currentMoney, count: DECREASE_COUNT },
    ]);

    decreaseCashCount(currentMoney);
  };

  const insertTotalMoney = (currentCashData) => {
    const restCashDatas = currentCashData.reduce((prev, { money, count }) => {
      decreaseCashCount(money, count);
      return [...prev, { money, count }];
    }, []);

    setInsertedMoney((prevInsertedMoney) => [
      ...prevInsertedMoney,
      ...restCashDatas,
    ]);
  };

  // 아무것도 구매하지 않고 반환버튼을 누른경우 그대로 돌려주는 함수
  const resetInsertedMoney = (moneyCount) => {
    setCashData((prevCashData) =>
      prevCashData.map((currentData) =>
        moneyCount
          .filter(({ money }) => money === currentData.money)
          .reduce(
            (prev, { count }) => ({ ...prev, count: prev.count + count }),
            currentData
          )
      )
    );
    setInsertedMoney([]);
  };

  const spendInsertedMoney = (productPrice) => {
    setInsertedMoney((prevInsertedMoney) => {
      const totalMoney = computeTotalMoney(prevInsertedMoney);
      let restInsertedMoney = totalMoney - productPrice;

      return MONEY_ARR_DESC_ORDER.map((currentMoney) => {
        let moneyCount = INITIAL_COUNT;

        if (!restInsertedMoney || restInsertedMoney < currentMoney) {
          return { money: currentMoney, count: moneyCount };
        }

        if (!(restInsertedMoney % currentMoney)) {
          while (restInsertedMoney) {
            moneyCount += INCREASE_COUNT;
            restInsertedMoney -= currentMoney;
          }
          return { money: currentMoney, count: moneyCount };
        }

        while (restInsertedMoney >= currentMoney) {
          moneyCount += INCREASE_COUNT;
          restInsertedMoney -= currentMoney;
        }
        return { money: currentMoney, count: moneyCount };
      });
    });

    decreaseCashCount(productPrice);
  };

  const moneyData = useMemo(
    () => ({
      cashData,
    }),
    [cashData]
  );

  const moneyActions = useMemo(
    () => ({
      insertMoney,
      insertTotalMoney,
      resetInsertedMoney,
      spendInsertedMoney,
      decreaseCashCount,
    }),
    []
  );

  const totalInsertedMoney = useMemo(
    () => ({ insertedMoney }),
    [insertedMoney]
  );

  return (
    <MoneyActionsContext.Provider value={moneyActions}>
      <MoneyContext.Provider value={moneyData}>
        <InsertedMoneyContext.Provider value={totalInsertedMoney}>
          {children}
        </InsertedMoneyContext.Provider>
      </MoneyContext.Provider>
    </MoneyActionsContext.Provider>
  );
};

export default MoneyProvider;
