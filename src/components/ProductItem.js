import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

//styled components:
const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: black;
  opacity: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-out;
  cursor: pointer;
`;

const Container = styled.div`
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:hover ${Info} {
    opacity: 0.6;
  }
`;

const Image = styled.img`
  height: 400px;
  width: 300px;
  object-fit: cover;
`;

const Icon = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin: 10px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-out;
  cursor: pointer;

  &:hover {
    background-color: hotpink;
    transform: scale(1.1);
  }
`;

const ProductItems = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Icon>
          <SearchOutlinedIcon />
        </Icon>
        <Icon>
          <FavoriteBorderOutlinedIcon />
        </Icon>
        <Icon>
          <ShoppingCartOutlinedIcon />
        </Icon>
      </Info>
    </Container>
  );
};

export default ProductItems;
