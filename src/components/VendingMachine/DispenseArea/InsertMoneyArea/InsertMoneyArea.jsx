import { useRef } from "react";

import Button from "components/common/form/Button/Button";
import Input from "components/common/form/Input/Input";
import constants from "utils/constants";

import { Form, insertButtonStyle, inputStyle } from "./InsertMoneyArea.styled";

const {
  CURRENCY,
  BUTTON_NAME: { INSERT },
} = constants;

const MAX_INPUT_LENGTH = 5;
const isOverMaxLength = (input) => {
  return input.length > MAX_INPUT_LENGTH;
};

const InsertMoneyArea = ({ value }) => {
  const inputRef = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isOverMaxLength(inputRef.current.value)) {
      alert(`만 단위까지만 입력가능합니다.`);
      inputRef.current.focus();
      return;
    }

    const inputNumber = Number(inputRef.current.value);
    console.log(inputNumber);
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
