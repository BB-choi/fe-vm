import { useContext } from "react";

import Button from "components/common/form/Button/Button";
import { InsertedMoneyContext } from "contexts/moneyContext";
import constants from "utils/constants";

import returnButtonStyle from "./ReturnButton.styled";

const { RETURN } = constants.BUTTON_NAME;

const handleClickReturnButton = () => {
  console.log("return button");
};

const ReturnButton = () => {
  const { insertedMoney } = useContext(InsertedMoneyContext);

  return (
    <Button
      data={{
        name: RETURN,
      }}
      styles={returnButtonStyle}
      onClick={handleClickReturnButton}
      isDisabled={!insertedMoney.length}
    />
  );
};

export default ReturnButton;
