import React, { useState } from "react";
import { Alert } from "antd";
import { useQuery} from "@apollo/client";
import { useTranslation } from "react-i18next";

import { Loading } from "components/atoms";
import { BuildingSelector } from "components/molecules";
import { BuildingDetails } from "components/organisms";
import { getBuildings } from "apollo/Operations/Client/Queries";
import { Container, Title } from "./styles";

const BuildingTemplate: React.FC = (props: any) => {
  //const { loading, error, data } = useQuery(getLocalUser);
  const { t } = useTranslation();
  const { loading, error, data } = useQuery(getBuildings);
  const [buildingId, setBuilding] = useState(0);

  const changeBuilding = (value: number) => {
    setBuilding(value);
  };

  if (loading) {
    return <Loading LoadingText="Loading..." />;
  }

  if (error) {
    return <Alert message={error.message} type="error" showIcon />;
  }

  return (
    <Container>
      <Title>{t("BuildingDetails")}</Title>
      <BuildingSelector onChange={changeBuilding} buildings={data.Buildings} value={-1} />
      {buildingId !== 0 && <BuildingDetails buildingId={buildingId} total ={data.Buildings.length} />}
    </Container>
  );
};

export default BuildingTemplate;
