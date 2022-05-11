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
  background: linear-gradient(#004b93, 80%, #1e1e1e);
  margin-right: 1rem;
`;

const ProgressWrapper = styled.div`
  width: 40%;
  height: 100%;
  padding: 1rem;

  border: 2px solid #000;
`;

export { Wrapper, ProductListWrapper, ProgressWrapper };
