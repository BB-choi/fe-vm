import { useContext } from "react";

import { InsertedMoneyContext } from "contexts/moneyContext";

const TotalInsertedMoneyArea = () => {
  const { insertedMoney } = useContext(InsertedMoneyContext);

  return <p>{insertedMoney}</p>;
};

export default TotalInsertedMoneyArea;
