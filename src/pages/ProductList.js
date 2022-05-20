import styled from "styled-components";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";

const Container = styled.div``;

const Title = styled.h1`
  margin: 25px 0 25px 150px;
  letter-spacing: -2px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 25px 150px;
`;

const Filter = styled.div``;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 400;
`;

const Select = styled.select``;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Title>Blazers</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>White</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>Small</Option>
            <Option>Medium</Option>
            <Option>Large</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (Low - High)</Option>
            <Option>Price (High - Low)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
