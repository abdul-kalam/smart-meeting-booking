import React from "react";
import { useQuery } from "@apollo/client";
import logo from "assets/app/logo.svg";
import { useTranslation } from "react-i18next";
import { Image, Loading } from "components/atoms";
import { StandardTemplate, AvailableRoomsListTemplate } from "components/templates";

import PageTitle from "components/atoms/PageTitle";
import { Container, Anchor } from "./styles";
import { SmartMeetingProps } from "./RoomSelect.interface";
import { getBuildings } from "apollo/Operations/Client/Queries";

const RoomSelect: React.FC<SmartMeetingProps.IProps> = () => {
  const { t, ready } = useTranslation();

  return (
    <StandardTemplate>
      <PageTitle Title="Smart Meeting Organiser" />
      <Container className="App">
        <AvailableRoomsListTemplate />
      </Container>
    </StandardTemplate>
  );
};

export default RoomSelect;
