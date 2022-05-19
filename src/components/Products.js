import styled from "styled-components";
import { popularProducts } from "../data/data";
import ProductItem from "./ProductItem";
import { v4 as uuidv4 } from "uuid";

//styled components:
const Title = styled.h1`
  margin: 25px 0 25px 150px;
  letter-spacing: -2px;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
  margin: 0 40px;
`;

const Products = () => {
  return (
    <>
      <Title> Popular Products</Title>
      <Container>
        {popularProducts.map((item) => {
          return <ProductItem item={item} key={uuidv4()} />;
        })}
      </Container>
    </>
  );
};

export default Products;
