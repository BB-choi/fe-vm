import { useContext } from "react";

import Button from "components/common/form/Button/Button";
import { SetProgressContext } from "contexts/progressContext";
import constants from "utils/constants";

import { productButtonStyle, ProductLi } from "./ProductItem.styled";

const { SOLDOUT_MESSAGE } = constants;

const ProductItem = ({ productData, currentMoney }) => {
  const { name, isInStock, price } = productData;
  const isAvailablePurchase = currentMoney >= price;

  const updateProgress = useContext(SetProgressContext);

  const handleProductButtonClick = () => {
    updateProgress("purchase", price, name);
  };

  return (
    <ProductLi isAvailablePurchase={isAvailablePurchase} isInStock={isInStock}>
      <Button
        data={{ name }}
        styles={productButtonStyle}
        className="product-button"
        isClickable={isInStock && isAvailablePurchase}
        onClick={handleProductButtonClick}
      />
      <p className="product-price">{(isInStock && price) || SOLDOUT_MESSAGE}</p>
    </ProductLi>
  );
};

export default ProductItem;
