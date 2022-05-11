import styled, { css } from "styled-components";

const StyledButton = styled.button`
  ${({ style: { size, fontSize, border, margin, bgColor, color } }) => {
    return css`
      width: ${size.width};
      height: ${size.height};
      font-size: ${fontSize};
      margin: ${margin || "0 0 0 1rem"};
      border: ${border || "none"};
      color: ${color || "#000"};
      background-color: ${bgColor || "#fff"};
    `;
  }}
  letter-spacing: -0.7px;
  word-break: keep-all;
  border-color: #000;
`;

export default StyledButton;
