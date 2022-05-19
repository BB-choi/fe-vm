import { memo } from "react";

import constants from "utils/constants";
import numberUtil from "utils/numberUtil";

const { CURRENCY } = constants;
const { seperateThousands } = numberUtil;

const getProgressString = ({ type, money, product }) => {
  const currentMoney = `${seperateThousands(money)}${CURRENCY}`;

  switch (type) {
    case "insert":
      return `${currentMoney} 투입`;
    case "purchase":
      return `${product} 구입 (${currentMoney} 사용)`;
    case "return":
      return `${product ? "잔돈" : "투입 금액"} ${currentMoney} 반환`;
    default:
      return "";
  }
};

const ProgressItem = ({ progress }) => {
  return <li>{getProgressString(progress)}</li>;
};

export default memo(ProgressItem);
