import { useState } from "react";

import ProductButton from "components/Product/ProductButton/ProductButton";
import ProductPrice from "components/Product/ProductPrice/ProductPrice";
import products from "mockData/products";
import styled from "styled-components";

const { productsList } = products;

const ProductLi = ({ productsData }) => {
  return productsData.map((product) => (
    <Li key={product.id}>
      <ProductButton
        productData={product}
        style={{ width: "100%", fontSize: "1.3rem" }}
      />
      <ProductPrice productData={product} />
    </Li>
  ));
};

const ProductList = () => {
  const [productsData, setProductsData] = useState(productsList);

  return (
    <ProductUl>
      <ProductLi productsData={productsData} />
    </ProductUl>
  );
};

const ProductUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const Li = styled.li`
  height: 4rem;
  /* background-color: green; */
  margin-bottom: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default ProductList;
