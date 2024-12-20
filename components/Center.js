import styled from "styled-components";

const StyledDiv = styled.div`
  margin: 0 ;
  padding: 0 20px;
`;

export default function Center({children}) {
  return (
    <StyledDiv>{children}</StyledDiv>
  );
}