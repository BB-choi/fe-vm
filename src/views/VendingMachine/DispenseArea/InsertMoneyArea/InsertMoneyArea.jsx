import Input from "components/form/Input";
import constants from "mockData/constants";

const InsertMoneyArea = () => {
  const { CURRENCY } = constants;
  return (
    <>
      <Input type="number" value={0} /> {CURRENCY}
    </>
  );
};

export default InsertMoneyArea;
