import styled, { css } from "styled-components";

const ProductButton = ({ productData, style }) => {
  return (
    // <Button size={size} fontSize={fontSize} border={border} margin={margin}>
    <Button style={style}>{productData.productName}</Button>
  );
};

const Button = styled.button`
  ${({ style: { size, fontSize, border, margin } }) => {
    return css`
      width: ${size.width};
      height: ${size.height};
      font-size: ${fontSize};
      margin: ${margin};
      border: ${border};
    `;
  }}
  border-color: #000;
`;

export default ProductButton;
