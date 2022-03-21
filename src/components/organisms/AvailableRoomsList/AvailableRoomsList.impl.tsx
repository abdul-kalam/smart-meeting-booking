import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useQuery, useLazyQuery, useMutation } from "@apollo/client";
import { getApolloClient } from "apollo";
import { useTranslation } from "react-i18next";

import { MeetingModel } from "apollo/Models";
import { getMeeting, getBuildingById } from "apollo/Operations/Client/Queries";
import { localMeetingMutations, SAVE_MEETING } from "apollo/Operations/Client/Mutations";
import { Button, Loading, Card, MessageBanner } from "components/atoms";
import { Container, ButtonContainer } from "./styles";
import { convertToDateTime } from "../../../utils/common/index";
import { clearKeysFromLocalStorage } from "../../../utils/localStorage";
import { validateFormValues } from "../../../utils/FormValidation/validation";

const AvailableRoomsList = (props: any) => {
  const { t } = useTranslation();

  const [hasId, setHasId] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState(-1);
  const [getBuilding, { loading, error, data }] = useLazyQuery(getBuildingById);

  let currentMeeting: MeetingModel | null;
  const client = getApolloClient();
  const result = client.readQuery({ query: getMeeting });
  currentMeeting = result.meeting;

  useEffect(() => {
    if (currentMeeting?.buildingId) {
      setHasId(true);
      getBuilding({ variables: { buildingId: currentMeeting.buildingId } });
    } else {
      setHasId(false);
    }
  }, []);

  let history = useHistory();

  const [saveMeeting, { loading: saveLoading, error: saveError }] = useMutation(
    SAVE_MEETING,
    {
      onCompleted() {
        console.log("saved");
        clearKeysFromLocalStorage("bookedMeeting");
        setIsSaved(true);
      },
    },
  );

  if (!hasId) {
    return (
      <MessageBanner type={"error"}>
        <span>
          Please add meeting. <a onClick={() => history.push("/add-meeting")}>Go back</a>{" "}
        </span>
      </MessageBanner>
    );
  }

  if (loading) {
    return <Loading LoadingText="Loading..." />;
  }

  if (error) {
    return (
      <MessageBanner type={"error"}>
        <span>{error.message}</span>
      </MessageBanner>
    );
  }

  const rooms: any = [];

  const meetingRooms = data.Building.meetingRooms;
  const date = currentMeeting?.date || "";
  const startTime = currentMeeting?.startTime || "";
  const endTime = currentMeeting?.endTime || "";
  const bookingStartDateTime = convertToDateTime(
    date,
    parseInt(startTime.split(":")[0], 10),
    parseInt(startTime.split(":")[1], 10),
  );
  const bookingEndDateTime = convertToDateTime(
    date,
    parseInt(endTime.split(":")[0], 10),
    parseInt(endTime.split(":")[1], 10),
  );
  meetingRooms.forEach((room: any) => {
    const isRoomBooked = room.meetings.some((meeting: any) => {
      const meetingStartDateTime = convertToDateTime(
        meeting.date,
        parseInt(meeting.startTime.split(":")[0], 10),
        parseInt(meeting.startTime.split(":")[1], 10),
      );
      const meetingEndDateTime = convertToDateTime(
        meeting.date,
        parseInt(meeting.endTime.split(":")[0], 10),
        parseInt(meeting.endTime.split(":")[1], 10),
      );
      return (
        (bookingStartDateTime < meetingStartDateTime &&
          bookingStartDateTime > meetingEndDateTime) ||
        (bookingEndDateTime < meetingStartDateTime &&
          bookingEndDateTime > meetingEndDateTime)
      );
    });
    if (!isRoomBooked) rooms.push(room);
  });

  const onSelected = (id: string) => {
    const meetingRoomId = parseInt(id, 10);
    setSelectedRoomId(meetingRoomId);
    localMeetingMutations.updateLocalMeeting({ meetingRoomId: meetingRoomId });
  };

  const onMeetingSave = () => {
    const result = client.readQuery({ query: getMeeting });
    const meeting = result.meeting;

    const { isValid, errors } = validateFormValues(meeting);
    if (meeting.meetingRoomId <= 0) {
      setHasError(true);
    } else if (isValid) {
      setHasError(false);
      saveMeeting({ variables: { id: meeting.buildingId, ...meeting } });
    }
  };

  return (
    <>
      <Container>
        {isSaved && (
          <MessageBanner type={"success"}>
            <span>
              Meeting is saved <a onClick={() => history.push("/")}>Go to Home</a>{" "}
            </span>
          </MessageBanner>
        )}
        {hasError && (
          <MessageBanner type={"error"}>
            <span>Please select a room </span>
          </MessageBanner>
        )}
        {rooms.map((room: any) => (
          <Card
            selected={selectedRoomId == room.id ? "true" : "false"}
            key={room.id}
            id={room.id}
            onSelected={onSelected}>
            <p>{room.name}</p>
            <p>{data.Building.name}</p>
            <p>Floor {room.floor}</p>
          </Card>
        ))}
      </Container>
      <ButtonContainer>
        <Button text={"Save"} onClick={onMeetingSave} />
      </ButtonContainer>
    </>
  );
};

export default AvailableRoomsList;
