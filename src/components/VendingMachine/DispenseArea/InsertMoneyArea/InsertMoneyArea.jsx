import Button from "components/common/form/Button/Button";
import Input from "components/common/form/Input/Input";
import constants from "utils/constants";

import {
  Wrapper,
  insertButtonStyle,
  inputStyle,
} from "./InsertMoneyArea.styled";

const { CURRENCY } = constants;
const { INSERT } = constants.BUTTON_NAME;

const InsertMoneyArea = ({ value }) => {
  return (
    <Wrapper>
      <div className="input-wrap">
        <Input type="number" value={value} styles={inputStyle} /> {CURRENCY}
      </div>
      <Button data={{ name: INSERT }} styles={insertButtonStyle} />
    </Wrapper>
  );
};

export default InsertMoneyArea;
