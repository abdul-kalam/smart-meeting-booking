import React, { useState } from "react";

import { DropdownProps } from "./Dropdown.interface";
import { Select } from "./styles";

const Dropdown: React.FC<DropdownProps.IProps> = props => {
  const { onChange, list } = props;
  const [value, setValue] = useState(props.value);
  const onSelectChange = (e: any) => {
    setValue(e.target.value);
    onChange(parseInt(e.target.value));
  };
  return (
    <Select value={value} onChange={onSelectChange}>
      <option value={-1}>Select building</option>
      {list.map(item => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
    </Select>
  );
};

export default Dropdown;
