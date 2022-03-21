import FormItemLabel from "antd/lib/form/FormItemLabel";
import React, { useState } from "react";

import { useTranslation } from "react-i18next";
import { I18nService } from "services";
import { localMeetingMutations } from "apollo/Operations/Client/Mutations";
import { FormInput, FormLabel } from "../../atoms";
import { BuildingSelectorProps } from "./StartTime.interface";
import { Field } from "./styles";

const StartTime = (props: any) => {
  const { i18n } = useTranslation();
  const onStartTimeChange = async (value: string) => {
    await localMeetingMutations.updateLocalMeeting({ startTime: value });
  };

  return (
    <Field>
      <FormLabel text={"Start Time"} id={"startTime"} />
      <FormInput
        type={"time"}
        id={"startTime"}
        value={props.value || ""}
        onChange={onStartTimeChange}
      />
    </Field>
  );
};

export default StartTime;
