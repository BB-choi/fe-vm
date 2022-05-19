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
  DECREASE_COUNT,
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
  notValidLastIndex: "일의 자리가 유효하지 않습니다.",
  overMaxLength: "만 단위까지만 입력 가능합니다.",
  overBaseMoney: "소지금 초과. 최대 금액이 투입됩니다.",
  hasNoMoney: "소지한 금액이 없습니다.",
  insertSimilarMoney: "입력금액과 가까운 금액이 투입됩니다.",
  insertExactMoney: "입력금액을 투입합니다.",
};

const InsertMoneyArea = () => {
  const [message, setMessage] = useState(alertMessages.initialMessage);

  const updateProgress = useContext(SetProgressContext);
  const { insertTotalMoney, insertMoney } = useContext(MoneyActionsContext);
  const { cashData } = useContext(MoneyContext);

  const inputRef = useRef(null);

  const focusInput = () => inputRef.current.focus();

  const isValidInput = (inputValue) => {
    const { underMinLength, overMaxLength, notValidLastIndex } = alertMessages;
    if (isInputUnderMinLength(inputValue)) {
      setMessage(underMinLength);
      return false;
    }

    if (!isLastIndexZero(inputValue)) {
      setMessage(notValidLastIndex);
      return false;
    }

    if (isInputOverMaxLength(inputValue)) {
      setMessage(overMaxLength);
      return false;
    }

    return true;
  };

  const isOverBaseMoney = (inputNumber, totalMoney) => {
    const { hasNoMoney, overBaseMoney } = alertMessages;

    if (!totalMoney) {
      setMessage(hasNoMoney);
      return false;
    }

    if (!isWithinBaseMoney(inputNumber, totalMoney)) {
      setMessage(overBaseMoney);
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

    let inputNumber = Number(inputValue);
    const totalMoney = computeTotalMoney(cashData);
    if (!isOverBaseMoney(inputNumber, totalMoney)) {
      return;
    }

    const { insertSimilarMoney, insertExactMoney } = alertMessages;

    // 높은 금액부터 확인 후
    MONEY_ARR_DESC_ORDER.forEach((unit) => {
      const [{ money, count }] = cashData.filter(
        (current) => current.money === unit
      );

      if (inputNumber < 0 || money > inputNumber) {
        return;
      }

      let moneyCount = count;
      if (!(inputNumber % money)) {
        while (inputNumber && moneyCount) {
          insertMoney(money);
          inputNumber -= money;
          moneyCount -= DECREASE_COUNT;
          updateProgress("insert", money);
        }
        return;
      }

      if (inputNumber > 0 && moneyCount) {
        insertMoney(money);
        inputNumber -= money;
        moneyCount -= DECREASE_COUNT;
        updateProgress("insert", money);
      }
    });

    if (!inputNumber) {
      setMessage(insertExactMoney);
      return;
    }

    // 여전히 inputNumber가 있으면 작은 금액부터 확인해서 다시 넣어줌
    for (let i = 0; i < cashData.length; i += 1) {
      const { money, count } = cashData[i];
      if (count) {
        insertMoney(money);
        inputNumber -= money;
        updateProgress("insert", money);
      }

      if (inputNumber < 0) {
        break;
      }
    }

    setMessage(insertSimilarMoney);
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
