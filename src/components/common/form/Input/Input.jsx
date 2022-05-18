import { useState } from "react";

import StyledInput from "./Input.styled";

const Input = ({ type, value, styles }) => {
  const [inputValue, setInputValue] = useState(value);

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  return (
    <StyledInput
      type={type}
      value={inputValue}
      onChange={handleInputChange}
      styles={styles}
    />
  );
};

export default Input;
