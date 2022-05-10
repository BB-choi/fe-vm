import styled from "styled-components";

import DispenseArea from "./DispenseArea/DispenseArea";
import ProductList from "./ProductList/ProductList";

const VendingMachine = () => {
  return (
    <Wrapper>
      <ProductListWrapper>
        <ProductList />
      </ProductListWrapper>

      <ProgressWrapper>
        <DispenseArea />
      </ProgressWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;

  width: 100%;
  height: 100%;

  div:not(:last-child) {
    margin-right: 1rem;
  }
`;

const ProductListWrapper = styled.div`
  width: 60%;
  padding: 1rem;
  border: 2px solid #000;
  border-radius: 1rem;
  background-color: #fe001a;
`;

const ProgressWrapper = styled.div`
  width: 40%;
  height: 100%;
  padding: 1rem;

  border: 2px solid #000;
`;

export default VendingMachine;
