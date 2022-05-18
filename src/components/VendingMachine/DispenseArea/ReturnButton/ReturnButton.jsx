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
const { computeTotalMoney } = moneyHelper;

const ReturnButton = () => {
  const { insertedMoney } = useContext(InsertedMoneyContext);
  const updateProgress = useContext(SetProgressContext);
  const resetInsertedMoney = useContext(ResetInsertedMoneyContext);

  const totalMoney = computeTotalMoney(insertedMoney);

  const handleClickReturnButton = () => {
    updateProgress("return", totalMoney);
    resetInsertedMoney();
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
