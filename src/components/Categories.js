import styled from "styled-components";
import CategoryItem from "../components/CategoryItem";
import { categories } from "../data/data";
import { v4 as uuidv4 } from "uuid";

//styled components:
const Title = styled.h1`
  margin: 25px 0 25px 150px;
  letter-spacing: -2px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const Categories = () => {
  return (
    <>
      <Title>Categories</Title>
      <Container>
        {categories.map((item) => {
          return <CategoryItem item={item} key={uuidv4()} />;
        })}
      </Container>
    </>
  );
};

export default Categories;
