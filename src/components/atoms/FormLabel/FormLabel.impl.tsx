import React from "react";
import { StyledLabelProps } from "./FormLabel.interface";
import { StyledLabel } from "./styles";

const Button: React.FC<StyledLabelProps.IProps> = props => {
  const { text, id } = props;
  return <StyledLabel htmlFor={id}>{text}</StyledLabel>;
};

export default Button;
