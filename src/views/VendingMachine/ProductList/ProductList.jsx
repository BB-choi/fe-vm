import { useState } from "react";

import ProductButton from "components/ProductButton/ProductButton";
import products from "mockData/products";
import styled from "styled-components";

const { productsList } = products;

const ProductLi = ({ productsData }) => {
  return productsData.map((product) => (
    <li key={product.id}>
      <ProductButton productData={product} />
    </li>
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

const ProductUl = styled.ul``;

export default ProductList;
