import styled from "styled-components";

const MoneyLi = styled.li`
  width: 100%;
  display: flex;

  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }

  .money {
    border-radius: 4rem;
  }

  .count {
    width: 4rem;
    font-size: 1.3rem;
    line-height: 3rem;
    text-align: center;
    border-bottom: 2px solid #000;
  }
`;

export default MoneyLi;
