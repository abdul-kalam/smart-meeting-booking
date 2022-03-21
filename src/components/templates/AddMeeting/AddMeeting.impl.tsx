import React from "react";
import { useTranslation } from "react-i18next";

import { AddMeetingForm } from "components/organisms";
import { Container, Title } from "./styles";
import { AddMeetingProps } from "./AddMeeting.interface";

const AddMeeting: React.FC<AddMeetingProps.IProps> = () => {
  const { t, ready } = useTranslation();

  return (
    <Container>
      <Title>Add Meeting</Title>
      <AddMeetingForm />
    </Container>
  );
};

export default AddMeeting;
