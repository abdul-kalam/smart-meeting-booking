import styled from "styled-components";

export const Select = styled.select`
  width: 100%;
  height: 45px;
  background: white;
  border: 1px solid #ddd;
  color: ${props => props.theme.colors.black};
  background: papayawhip;
  padding-right: 5px;
  font-size: 14px;
  border-radius: 5px;
    margin-bottom: 15px;
    cursor: pointer;
  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;
