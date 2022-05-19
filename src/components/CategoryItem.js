import styled from "styled-components";

//styled components:
const Container = styled.div`
  position: relative;
`;

const Image = styled.img`
  height: 600px;
  width: 500px;
  object-fit: cover;
`;

const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 10px;
`;

const Button = styled.button`
  font-family: "Cormorant_Garamond";
  font-size: 18px;
  font-weight: 700;
  padding: 12px;
  border: none;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
  transition: all 0.3s ease-out;

  &:hover {
    background-color: hotpink;
    transform: scale(1.1);
  }
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>Shop Now</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
