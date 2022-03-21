import React from "react";
import { useTranslation } from "react-i18next";

import { AvailableRoomsList } from "components/organisms";
import { Container, Title } from "./styles";

const AvailableRoomsListTemplate = (props: any) => {
  const { t } = useTranslation();

  return (
    <Container>
      <Title>Select one of the free rooms</Title>
      <AvailableRoomsList />
    </Container>
  );
};

export default AvailableRoomsListTemplate;
