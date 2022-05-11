import styled from "styled-components";

const StyledButton = styled.button`
  letter-spacing: -0.7px;
  height: ${({ theme: { sizes } }) => sizes.button.height};
  word-break: keep-all;
  border-color: ${({ theme: { colors } }) => colors.black};

  ${({ styles }) => styles}
`;

export default StyledButton;