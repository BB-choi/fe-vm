import styled from "styled-components";

const ProductButton = ({ productData }) => {
  return <Button>{productData.productName}</Button>;
};

const Button = styled.button`
  width: 5rem;
  font-size: 1.3rem;
`;

export default ProductButton;
