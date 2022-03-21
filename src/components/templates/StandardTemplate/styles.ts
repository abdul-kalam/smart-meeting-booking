import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme.bgColors.primary};
`;

export const Body = styled.div`
  background-color: ${props => props.theme.bgColors.primary};
  width: 500px;
  margin-top: 30px;
  @media (max-width: 540px) {
    width: 100%;
    margin: 30px;
  }

`;
