import styled from "styled-components";

const ProductButton = ({
  productData,
  style: { size, fontSize, border, margin },
}) => {
  return (
    <Button size={size} fontSize={fontSize} border={border} margin={margin}>
      {productData.productName}
    </Button>
  );
};

const Button = styled.button`
  width: ${({ size }) => size.width};
  height: ${({ size }) => size.height};
  font-size: ${({ fontSize }) => fontSize};
  margin: ${({ margin }) => margin};
  border: ${({ border }) => border};
  border-color: #000;
`;

export default ProductButton;
