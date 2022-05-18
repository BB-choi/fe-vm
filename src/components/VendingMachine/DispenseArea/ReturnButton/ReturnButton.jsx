import { useContext } from "react";

import Button from "components/common/form/Button/Button";
import {
  InsertedMoneyContext,
  ResetInsertedMoneyContext,
} from "contexts/moneyContext";
import { SetProgressContext } from "contexts/progressContext";
import moneyHelper from "helper/moneyHelper";
import constants from "utils/constants";

import returnButtonStyle from "./ReturnButton.styled";

const { RETURN } = constants.BUTTON_NAME;
const { computeTotalMoney, getTotalInsertedMoney } = moneyHelper;

const ReturnButton = () => {
  const { insertedMoney } = useContext(InsertedMoneyContext);
  const updateProgress = useContext(SetProgressContext);
  const resetInsertedMoney = useContext(ResetInsertedMoneyContext);

  const totalMoney = computeTotalMoney(insertedMoney);

  const handleClickReturnButton = () => {
    const totalInsertedMoneyCount = getTotalInsertedMoney(insertedMoney);
    console.log(totalInsertedMoneyCount, "여기가 클릭핸들러");
    resetInsertedMoney(totalInsertedMoneyCount);
    updateProgress("return", totalMoney);
  };

  return (
    <Button
      data={{
        name: RETURN,
      }}
      styles={returnButtonStyle}
      onClick={handleClickReturnButton}
      isDisabled={!insertedMoney.length && !totalMoney}
    />
  );
};

export default ReturnButton;
