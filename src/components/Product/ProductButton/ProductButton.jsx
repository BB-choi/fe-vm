import styled from "styled-components";

const ProductButton = ({ productData, style: { width, fontSize } }) => {
  return (
    <Button width={width} fontSize={fontSize}>
      {productData.productName}
    </Button>
  );
};

const Button = styled.button`
  width: ${({ width }) => width};
  font-size: ${({ fontSize }) => fontSize};
`;

export default ProductButton;
