import Button from "components/common/form/Button/Button";
import constants from "utils/constants";

import returnButtonStyle from "./ReturnButton.styled";

const { RETURN } = constants.BUTTON_NAME;

const ReturnButton = () => {
  return (
    <Button
      data={{
        name: RETURN,
      }}
      styles={returnButtonStyle}
    />
  );
};

export default ReturnButton;
