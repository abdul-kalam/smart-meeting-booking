import React from "react";

import { Dropdown } from "./../../atoms";
import { BuildingSelectorProps } from "./BuildingSelector.interface";
import { Field } from "./styles";

const BuildingSelector = (props: BuildingSelectorProps.IProps) => {
  const { buildings, onChange } = props;

  return <Field><Dropdown onChange={onChange} list={buildings} value={props.value} /></Field>;
};

export default BuildingSelector;
