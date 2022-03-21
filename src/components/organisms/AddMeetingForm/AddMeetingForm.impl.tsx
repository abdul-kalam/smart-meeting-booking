import React, { useState } from "react";
import { getApolloClient } from "apollo";
import { Alert } from "antd";
import { useQuery} from "@apollo/client";
import { useHistory } from "react-router-dom";
import { getBuildings, getBuildingById, getMeeting } from "apollo/Operations/Client/Queries";
import { localMeetingMutations } from "apollo/Operations/Client/Mutations";
import { Button, Loading, MessageBanner } from "components/atoms";
import {
  DateField,
  StartTime,
  EndTime,
  BuildingSelector,
  Title,
} from "components/molecules";
import { useTranslation } from "react-i18next";
import { Container, ButtonContainer, BuildingSelectorContainer } from "./styles";
import { validateFormValues } from "../../../utils/FormValidation/validation";
import { setLocalStorageValue, getLocalStorageValue } from "../../../utils/localStorage";

const AddMeetingForm = (props: any) => {
  const { t } = useTranslation();
  const [isFormValid, setIsFormValid] = useState(false);
  const [formError, setFormError] = useState<string[]>([]);
  const { loading, error, data } = useQuery(getBuildings);
  let history = useHistory();
  const onAddMeeting = async (e: React.ChangeEvent<HTMLInputElement>)  => {
    e.preventDefault();
    validateForm();
  };

  const validateForm = () => {
    const client = getApolloClient();
    const result = client.readQuery({ query: getMeeting });
    const meeting = result.meeting;

    const { isValid, errors } = validateFormValues(meeting);
    if (errors.length) {
      setFormError([...errors]);
    } else {
      setIsFormValid(true);
      setLocalStorageValue("bookedMeeting", meeting);
      history.push("/select-room");
    }
  };

  const changeBuilding = (value: number) => {
    localMeetingMutations.updateLocalMeeting({ buildingId: value });
  };

  if (loading) {
    return <Loading LoadingText="Loading..." />;
  }

  if (error) {
    return <Alert message={error.message} type="error" showIcon />;
  }

  const getErroMsg = () => {
    return (
      <ul>
        {formError.map((error, index) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
    );
  };

  let bookedMeeting = getLocalStorageValue("bookedMeeting");
  if (bookedMeeting) {
    localMeetingMutations.updateLocalMeeting({ ...bookedMeeting });
  }

  return (
    <form>
      <Container>
        {formError.length > 0 && (
          <MessageBanner type={"error"}>{getErroMsg()}</MessageBanner>
        )}
        <Title value={bookedMeeting.title || ""} />
        <DateField value={bookedMeeting.date || ""} />
        <StartTime value={bookedMeeting.startTime || ""} />
        <EndTime value={bookedMeeting.endTime || ""} />
        <BuildingSelectorContainer>
          <BuildingSelector
            onChange={changeBuilding}
            buildings={data.Buildings}
            value={bookedMeeting.buildingId || -1}
          />
        </BuildingSelectorContainer>
      </Container>
      <ButtonContainer>
        <Button text={"Next"} onClick={onAddMeeting} />
      </ButtonContainer>
    </form>
  );
};

export default AddMeetingForm;
