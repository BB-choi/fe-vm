import styled from "styled-components";
import theme from "styles/theme";

const insertButtonStyle = {
  size: { width: "25%", height: "3rem" },
  fontStyle: theme.fontStyles.buttons.large,
  bgColor: theme.colors.green,
  margin: "0",
};

const Wrapper = styled.div`
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .input-wrap {
    width: 100%;
  }
`;

export { Wrapper, insertButtonStyle };
