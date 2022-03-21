import React, { useState } from "react";
import { localMeetingMutations } from "apollo/Operations/Client/Mutations";
import { FormInput, FormLabel } from "../../atoms";
import { getDateString, convertToDateTime, formatDate } from "./../../../utils/common/index";
import { Field } from "./styles";

const DateField = (props: any) => {

  const onDateChange = (value: string) => {
    const dateStr = getDateString(value);
    localMeetingMutations.updateLocalMeeting({ date: dateStr });
  };
  let date: string;

  if (props.value) {
    let dateStr = convertToDateTime(props.value, 0, 0);
    date = formatDate(new Date(dateStr));
  } else {
    date = formatDate(new Date());
  }
  console.log(date)
  return (
    <Field>
      <FormLabel text={"Date"} id={"date"} />
      <FormInput type={"date"} id={"date"} value={date} onChange={onDateChange} />
    </Field>
  );
};

export default DateField;
