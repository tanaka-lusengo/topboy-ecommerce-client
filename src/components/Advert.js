import styled from "styled-components";

const Article = styled.article`
  height: 1.875rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  font-size: 0.875rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

const Advert = () => {
  return (
    <Article>Free UK Deliveries on orders over £150 & Free UK Returns</Article>
  );
};

export default Advert;
