import styled from "styled-components";

//styled components:
const Divider = styled.hr`
  margin: 20px 100px;
  border: none;
  background-color: black;
  color: black;
  border-radius: 5px;
  height: 1.5px;
  /* max-width: 800px; */
`;

const Container = styled.div`
  margin: 0 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Wrapper = styled.ul``;

const Title = styled.h3`
  font-family: "Cormorant_Garamond";
  margin-bottom: 15px;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  cursor: pointer;
`;

const Copyright = styled.p`
  text-align: center;
  margin-bottom: 50px;
`;

const Footer = () => {
  return (
    <>
      <Divider />
      <Container>
        <Wrapper>
          <Title>CUSTOMER SERVICES</Title>
          <ListItem>Contact Us</ListItem>
          <ListItem>Delivery</ListItem>
          <ListItem>Returns</ListItem>
          <ListItem>FAQs</ListItem>
        </Wrapper>
        <Wrapper>
          <Title>LEGAL & COOKIES</Title>
          <ListItem>Accessibility</ListItem>
          <ListItem>Terms & Conditions</ListItem>
          <ListItem>Privacy Policy</ListItem>
          <ListItem>Modern Slavery Act</ListItem>
        </Wrapper>
        <Wrapper>
          <Title>OUR COMPANY</Title>
          <ListItem>Accessibility</ListItem>
          <ListItem>Sustainability</ListItem>
          <ListItem>Store Locator</ListItem>
          <ListItem>Careers</ListItem>
        </Wrapper>
        <Wrapper>
          <Title>FOLLOW US</Title>
          <ListItem>Instagram</ListItem>
          <ListItem>TikTok</ListItem>
          <ListItem>Facebook</ListItem>
          <ListItem>Twitter</ListItem>
        </Wrapper>
      </Container>
      <Divider />
      <Copyright>COPYRIGHT © 2022 TOPBOY RIGHTS RESERVED</Copyright>
    </>
  );
};

export default Footer;
