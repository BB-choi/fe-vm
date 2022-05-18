import { useContext, useRef } from "react";

import Button from "components/common/form/Button/Button";
import Input from "components/common/form/Input/Input";
import { SetInsertedMoneyContext } from "contexts/moneyContext";
import { SetProgressContext } from "contexts/progressContext";
import moneyHelper from "helper/moneyHelper";
import constants from "utils/constants";

import { Form, insertButtonStyle, inputStyle } from "./InsertMoneyArea.styled";

const {
  CURRENCY,
  BUTTON_NAME: { INSERT },
} = constants;
const { isWithinBaseMoney, computeTotalMoney } = moneyHelper;

const MAX_INPUT_LENGTH = 5;
const isOverMaxLength = (input) => {
  return input.length > MAX_INPUT_LENGTH;
};

const alertMessages = {
  overMaxLength: `만 단위까지만 입력가능합니다.`,
  overBaseMoney: `소지금을 초과하여 입력하였습니다.\n최대 금액이 투입됩니다.`,
};

const InsertMoneyArea = ({ value }) => {
  const inputRef = useRef(null);

  const updateProgress = useContext(SetProgressContext);
  const insertMoney = useContext(SetInsertedMoneyContext);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isOverMaxLength(inputRef.current.value)) {
      alert(alertMessages.overMaxLength);
      inputRef.current.focus();
      return;
    }

    const inputNumber = Number(inputRef.current.value);
    const totalMoney =
      computeTotalMoney(/* 여기에 지갑총금액--> 지갑 총 카운트 Context사용하면 될듯 */);
    if (!isWithinBaseMoney(inputNumber, totalMoney)) {
      alert(alertMessages.overBaseMoney);
      // 금액 보정(최대금액으로 보정)
      insertMoney(totalMoney);
      updateProgress("insert", totalMoney);
      // 지갑에서 모든 카운트 제거하는 로직 필요
    }
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <div className="input-wrap">
        <Input type="number" value={value} styles={inputStyle} ref={inputRef} />
        {CURRENCY}
      </div>
      <Button
        data={{ name: INSERT }}
        styles={insertButtonStyle}
        type="submit"
      />
    </Form>
  );
};

export default InsertMoneyArea;
