import { useContext, useRef, useState } from "react";

import Button from "components/common/form/Button/Button";
import Input from "components/common/form/Input/Input";
import { MoneyContext, MoneyActionsContext } from "contexts/moneyContext";
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
  MONEY_ARR_DESC_ORDER,
  INITIAL_MONEY,
  BUTTON_NAME: { INSERT },
} = constants;
const { isWithinBaseMoney, computeTotalMoney } = moneyHelper;

const MAX_INPUT_LENGTH = 5;
const MIN_INPUT_LENGTH = 2;

const isInputOverMaxLength = (input) => {
  return input.length > MAX_INPUT_LENGTH;
};

const isInputUnderMinLength = (input) => {
  return input.length < MIN_INPUT_LENGTH;
};

const isLastIndexZero = (input) => {
  return input[input.length - 1] === "0";
};

const alertMessages = {
  initialMessage: "투입할 금액을 입력하세요.",
  underMinLength: "두 자리 이상 입력하세요.",
  notValidLastIndex: "십 원 단위부터 입력 가능합니다.",
  overMaxLength: "만 단위까지만 입력 가능합니다.",
  overBaseMoney: "소지금 초과. 최대 금액이 투입됩니다.",
};

const InsertMoneyArea = () => {
  const [message, setMessage] = useState(alertMessages.initialMessage);

  const updateProgress = useContext(SetProgressContext);
  const { insertTotalMoney } = useContext(MoneyActionsContext);
  const { cashData } = useContext(MoneyContext);

  const inputRef = useRef(null);

  const focusInput = () => inputRef.current.focus();

  const isValidInput = (inputValue) => {
    const { underMinLength, overMaxLength, notValidLastIndex } = alertMessages;
    if (!isLastIndexZero(inputValue)) {
      setMessage(notValidLastIndex);
      return false;
    }

    if (isInputUnderMinLength(inputValue)) {
      setMessage(underMinLength);
      return false;
    }

    if (isInputOverMaxLength(inputValue)) {
      setMessage(overMaxLength);
      return false;
    }

    return true;
  };

  const isOverBaseMoney = (inputNumber, totalMoney) => {
    if (!isWithinBaseMoney(inputNumber, totalMoney)) {
      setMessage(alertMessages.overBaseMoney);
      insertTotalMoney(cashData);
      updateProgress("insert", totalMoney);
      return false;
    }
    return true;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const inputValue = inputRef.current.value;
    if (!isValidInput(inputValue)) {
      focusInput();
      return;
    }

    const inputNumber = Number(inputValue);
    const totalMoney = computeTotalMoney(cashData);
    if (!isOverBaseMoney(inputNumber, totalMoney)) {
      return;
    }

    console.log(cashData, MONEY_ARR_DESC_ORDER);
  };

  return (
    <Wrapper>
      <Form onSubmit={handleFormSubmit}>
        <div className="input-wrap">
          <Input
            type="number"
            placeholder={INITIAL_MONEY}
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
