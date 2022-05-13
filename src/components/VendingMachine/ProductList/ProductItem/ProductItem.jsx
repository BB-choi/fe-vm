import Button from "components/common/form/Button/Button";
import constants from "mockData/constants";

import { productButtonStyle, ProductLi } from "./ProductItem.styled";

const ProductItem = ({ productData }) => {
  const { name, isInStock, price } = productData;

  return (
    <ProductLi>
      <Button
        data={{ name }}
        styles={productButtonStyle}
        className="product-button"
        isDisabled={!isInStock}
      />
      <p className="product-price">
        {(isInStock && price) || constants.SOLDOUT_MESSAGE}
      </p>
    </ProductLi>
  );
};

export default ProductItem;
