import styled from "styled-components";
import CategoryItem from "../components/CategoryItem";
import { categories } from "../data/data";
import { StyledTitle } from "../components/Title";
import { v4 as uuidv4 } from "uuid";

//styled components:
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const Categories = () => {
  return (
    <>
      <StyledTitle>Categories</StyledTitle>
      <Container>
        {categories.map((item) => {
          return <CategoryItem item={item} key={uuidv4()} />;
        })}
      </Container>
    </>
  );
};

export default Categories;
