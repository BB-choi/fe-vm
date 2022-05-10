import Button from "components/form/Button/Button";
import Input from "components/form/Input/Input";
import constants from "mockData/constants";

import Wrapper from "./InsertMoneyArea.styled";

const InsertMoneyArea = () => {
  const { CURRENCY } = constants;

  return (
    <Wrapper>
      <div className="input-wrap">
        <Input
          type="number"
          value={0}
          style={{ size: { width: "80%", height: "2rem" }, fontSize: "2rem" }}
        />{" "}
        {CURRENCY}
      </div>
      <Button
        data={{ name: "투입" }}
        style={{
          size: { width: "25%", height: "3rem" },
          fontSize: "1.3rem",
          color: "#fff",
          bgColor: "#000",
          margin: "0",
        }}
      />
    </Wrapper>
  );
};

export default InsertMoneyArea;
