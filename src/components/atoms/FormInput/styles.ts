import styled from "styled-components";

export const Input = styled.input`
  font-size: 18px;
  color: ${props => props.theme.colors.black};
  padding: 10px 5px;
  margin-bottom: 10px;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  width:50%;
  ::placeholder {
    color: palevioletred;
  }
`;
