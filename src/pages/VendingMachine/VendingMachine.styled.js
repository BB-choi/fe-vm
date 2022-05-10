import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;

  width: 100%;
  height: 100%;
`;

const ProductListWrapper = styled.div`
  width: 60%;
  padding: 1rem;
  border: 2px solid #000;
  border-radius: 1rem;
  background-color: #fe001a;
  margin-right: 1rem;
`;

const ProgressWrapper = styled.div`
  width: 40%;
  height: 100%;
  padding: 1rem;

  border: 2px solid #000;
`;

export { Wrapper, ProductListWrapper, ProgressWrapper };
