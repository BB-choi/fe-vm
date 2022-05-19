import { useContext, useRef, useState } from "react";

import Button from "components/common/form/Button/Button";
import Input from "components/common/form/Input/Input";
import {
  MoneyContext,
  SetInsertedMoneyContext,
  SetMoneyContext,
} from "contexts/moneyContext";
import { SetProgressContext } from "contexts/progressContext";
import moneyHelper from "helper/moneyHelper";
import constants from "utils/constants";

import {
  Wrapper,
  Form,
  insertButtonStyle,
  inputStyle,
} from "./InsertMoneyArea.styled";

const {
  CURRENCY,
  BUTTON_NAME: { INSERT },
} = constants;
const { isWithinBaseMoney, computeTotalMoney } = moneyHelper;

const MAX_INPUT_LENGTH = 5;

const isInputOverMaxLength = (input) => {
  return input.length > MAX_INPUT_LENGTH;
};

const alertMessages = {
  initialMessage: "투입할 금액을 입력하세요.",
  overMaxLength: `만 단위까지만 입력가능합니다.`,
  overBaseMoney: `소지금 초과. 최대 금액이 투입됩니다.`,
};

const InsertMoneyArea = ({ value }) => {
  const [message, setMessage] = useState(alertMessages.initialMessage);

  const updateProgress = useContext(SetProgressContext);
  const decreaseCashCount = useContext(SetMoneyContext);
  const { insertTotalMoney } = useContext(SetInsertedMoneyContext);
  const { cashData } = useContext(MoneyContext);

  const inputRef = useRef(null);

  const focusInput = () => inputRef.current.focus();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isInputOverMaxLength(inputRef.current.value)) {
      setMessage(alertMessages.overMaxLength);
      focusInput();
      return;
    }

    const inputNumber = Number(inputRef.current.value);
    const totalMoney = computeTotalMoney(cashData);

    if (!isWithinBaseMoney(inputNumber, totalMoney)) {
      setMessage(alertMessages.overBaseMoney);
      cashData.forEach(({ money, count }) => decreaseCashCount(money, count));
      insertTotalMoney();
      updateProgress("insert", totalMoney);
    }
  };

  return (
    <Wrapper>
      <Form onSubmit={handleFormSubmit}>
        <div className="input-wrap">
          <Input
            type="number"
            value={value}
            styles={inputStyle}
            ref={inputRef}
          />
          {CURRENCY}
        </div>
        <Button
          data={{ name: INSERT }}
          styles={insertButtonStyle}
          type="submit"
        />
      </Form>
      <div className="alert">{message}</div>
    </Wrapper>
  );
};

export default InsertMoneyArea;
