import React, { useState } from "react";
import { Alert } from "antd";
import { useHistory } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useTranslation } from "react-i18next";

import { getBuildingById } from "apollo/Operations/Client/Queries";
import { Button, Loading, Card } from "components/atoms";
import { Container, ButtonContainer } from "./styles";
import { BuildingDetailsProps } from "./BuildingDetails.interface";
import { convertToDateTime, isToday } from "./../../../utils/common/index";

const BuildingDetails = (props: BuildingDetailsProps.IProps) => {
  const { t } = useTranslation();
  const { loading, error, data } = useQuery(getBuildingById, {
    variables: {
      buildingId: props.buildingId,
    },
  });

  let history = useHistory();

  if (loading) {
    return <Loading LoadingText="Loading..." />;
  }

  if (error) {
    return <Alert message={error.message} type="error" showIcon />;
  }

  const building = data?.Building;

  const getMeetingRoomDetails= (meetingRooms: any) => {
    let totalMeetingToday = 0;
    let activeMeetinNow = 0;
    let freeRoom = 0;
    let now = new Date();
    meetingRooms.forEach((rooms: any) => {
      freeRoom++;
      let meetings = rooms.meetings;
      let isRoomBooked = false;
      meetings.forEach((meeting: any) => {

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
        console.log(meeting.date)
        if(isToday(meetingEndDateTime)){
            totalMeetingToday++;
        }
        if(now >= meetingStartDateTime && now <= meetingEndDateTime){
            isRoomBooked = true;
            if(isToday(meetingEndDateTime)){
                activeMeetinNow++;
            }
        }
        
      });
      if (isRoomBooked) freeRoom--;
    });
    return {freeRoom, totalMeetingToday, activeMeetinNow};
  };

  const onAddMeeting = () => {
    history.push("/add-meeting");
  };

  const {freeRoom, totalMeetingToday, activeMeetinNow} =  getMeetingRoomDetails(building.meetingRooms);

  return (
    <Container>
      <Card>
        <h4>
          <b>Buildings</b>
        </h4>
        <p>Total:{props.total}</p>
      </Card>
      <Card>
        <h4>
          <b>Rooms in building {props.buildingId}</b>
        </h4>
        <p>Total:{building.meetingRooms.length}</p>
        <p>Free now:{freeRoom}</p>
      </Card>
      <Card>
        <h4>
          <b>Meeting details in building {props.buildingId}</b>
        </h4>
        <p>Total: {totalMeetingToday} today </p>
        <p>Total: {activeMeetinNow} going on now</p>
      </Card>
      <ButtonContainer>
        <Button text={"Add Meeting"} onClick={onAddMeeting} />
      </ButtonContainer>
    </Container>
  );
};

export default BuildingDetails;
