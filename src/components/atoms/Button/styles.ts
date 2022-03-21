import styled from "styled-components";

export const StyledButton = styled.button`
  background: blue;
  color: black;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export const FavoriteBtn = styled.button`
  -webkit-box-align: center;
  align-items: center;
  border-radius: 2rem;
  display: inline-flex;
  -webkit-box-pack: center;
  justify-content: center;
  font-size: 1.25rem;
  padding: 0.5rem 0.875rem;
  border: 2px solid #fa2d48;
  line-height: 1;
  margin: 15px 0px;
  overflow: visible;
  text-transform: none;
  appearance: button;
  cursor: pointer;
  background-color: var(--background-color-light);
  color: rgb(255, 255, 255);
  &:hover {
    transform: scale(1.1);
  }
  svg {
    width: 20px;
    height: 20px;
  }
`;

export const ButtonTxt = styled.span`
  display: inline-block;
  margin-left: 4px;
`;
