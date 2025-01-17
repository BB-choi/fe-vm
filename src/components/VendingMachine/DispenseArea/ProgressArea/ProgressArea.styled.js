import styled, { css } from "styled-components";

const Wrapper = styled.div`
  ${({ theme: { fontSizes, colors, whitespace } }) => css`
    font-size: ${fontSizes.normal};
    background-color: ${colors.black};
    color: ${colors.white};
    padding: ${whitespace.default};
  `};

  height: calc(100% - 13rem);
  max-height: calc(100% - 13rem);
  overflow-y: auto;
  white-space: pre-wrap;
`;

const ProgressList = styled.ol`
  li:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`;

export { Wrapper, ProgressList };
