import React from "react";
import { ButtonProps } from "./Button.interface";
import { FavoriteBtn, ButtonTxt } from "./styles";

const Button: React.FC<ButtonProps.IProps> = props => {
  const { text, onClick } = props;

  return (
    <FavoriteBtn onClick={onClick}>
      <ButtonTxt>{text}</ButtonTxt>
    </FavoriteBtn>
  );
};

export default Button;
