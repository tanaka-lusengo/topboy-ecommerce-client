import styled from "styled-components";

//styled components:
const Title = styled.h1`
  margin: 25px 0 25px 150px;
  letter-spacing: -2px;
`;

const Container = styled.div`
  height: 40vh;
  background-color: whitesmoke;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 100px 50px;
`;

const Description = styled.h1`
  width: 700px;
  margin-left: 50px;
  font-family: "Cormorant_Garamond";
`;

const InputContainer = styled.div`
  margin-right: 50px;
`;

const Input = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid black;
  background-color: transparent;
  width: 300px;
  font-family: "Cormorant_Garamond";
  font-size: 20px;
  margin-right: 10px;

  &:focus {
    border-bottom: 2px solid black;
  }
`;

const Button = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  font-family: "Cormorant_Garamond";
  font-size: 22px;
  font-weight: 600;
  transition: 0.2s ease-out;
  cursor: pointer;

  &:hover {
    color: hotpink;
    transform: translateY(-2px);
  }
`;

const Newsletter = () => {
  return (
    <>
      <Title>TopBoy Newsletter</Title>
      <Container>
        <Description>
          New to TopBoy? Sign up for 15% off full-price styles in your first
          order!
        </Description>
        <InputContainer>
          <Input />
          <Button>Sign Up</Button>
        </InputContainer>
      </Container>
    </>
  );
};

export default Newsletter;
