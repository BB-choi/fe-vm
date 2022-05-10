import Button from "components/form/Button/Button";

import MoneyLi from "./MoneyItem.styled";

const Count = ({ data }) => {
  return <p className="count">{data}</p>;
};

const MoneyItem = ({ cash, count }) => {
  return (
    <MoneyLi>
      <Button
        className="money"
        data={{ name: cash }}
        style={{
          size: { width: "4rem", height: "3rem" },
          fontSize: "1.3rem",
          margin: "0 1rem 0 0",
          bgColor: "green",
          color: "#fff",
        }}
      />
      <Count data={count} />
    </MoneyLi>
  );
};

export default MoneyItem;
