import React, { useState } from "react";
import { localMeetingMutations } from "apollo/Operations/Client/Mutations";
import { FormInput, FormLabel } from "../../atoms";
import { Field } from "./styles";

const EndTime = (props: any) => {
  const onEndTimeChange = async (value: string) => {
    await localMeetingMutations.updateLocalMeeting({ endTime: value });
  };

  return (
    <Field>
      <FormLabel text={"End Time"} id={"endTime"} />
      <FormInput
        type={"time"}
        id={"endTime"}
        value={props.value || ""}
        onChange={onEndTimeChange}
      />
    </Field>
  );
};

export default EndTime;
