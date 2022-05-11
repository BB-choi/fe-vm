import Button from "components/common/form/Button/Button";
import products from "mockData/products";

import { Li, ProductUl } from "./ProductList.styled";

const { productsList } = products;

const ProductLi = ({ productsData }) => {
  return productsData.map((productData) => (
    <Li key={productData.id}>
      <Button
        data={productData}
        style={{
          size: { width: "95%", height: "3rem" },
          fontSize: "1.1rem",
          border: "1px solid #000",
          margin: "0 auto",
        }}
        className="product-button"
      />
      <p className="product-price">{productData.price}</p>
    </Li>
  ));
};

const ProductList = () => {
  const productsData = productsList;

  return (
    <ProductUl>
      <ProductLi productsData={productsData} />
    </ProductUl>
  );
};

export default ProductList;
