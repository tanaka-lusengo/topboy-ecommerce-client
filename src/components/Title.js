import styled from "styled-components";

const Title = ({ className, children }) => (
  <h1 className={className}>{children}</h1>
);

const StyledTitle = styled(Title)`
  margin: 25px 0 25px 150px;
  letter-spacing: -2px;
`;

export { StyledTitle };
