import styled from "styled-components";

const ProductUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0.5rem;
  padding: 1rem;
  border-radius: 1rem;
  background-color: #fff;
`;

const Li = styled.li`
  height: 4.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .product-button:hover {
    background-color: #006ba8;
    color: #fff;
    font-weight: 600;
  }

  .product-price {
    text-align: center;
    font-weight: 600;
  }
`;

export { ProductUl, Li };
