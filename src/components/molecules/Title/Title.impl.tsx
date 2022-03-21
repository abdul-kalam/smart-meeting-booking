import FormItemLabel from "antd/lib/form/FormItemLabel";
import React, { useState } from "react";

import { useTranslation } from "react-i18next";
import { I18nService } from "services";
import { localMeetingMutations } from "apollo/Operations/Client/Mutations";
import { FormInput, FormLabel } from "../../atoms";
import { BuildingSelectorProps } from "./Title.interface";
import { Field } from "./styles";

const Title = (props: any) => {
  const { i18n } = useTranslation();
  const onChange = (value: string) => {
    localMeetingMutations.updateLocalMeeting({ title: value });
  };

  return (
    <Field>
      <FormLabel text={"Title"} id={"title"} />
      <FormInput type={"text"} id={"title"} value={props.value || ""} onChange={onChange} />
    </Field>
  );
};

export default Title;
