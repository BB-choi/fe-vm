import styled from "styled-components";

import ProductList from "./ProductList/ProductList";

const VendingMachine = () => {
  return (
    <ProductListWrapper>
      <ProductList />
    </ProductListWrapper>
  );
};

const ProductListWrapper = styled.div`
  width: 60%;
  height: 100%;
  padding: 1rem;
  border: 2px solid #000;
`;

export default VendingMachine;
