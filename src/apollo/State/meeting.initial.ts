import { makeVar } from "@apollo/client";
import { MeetingModel } from "apollo/Models";

export const initialMeeting = makeVar<MeetingModel>({
    __typename: "Meeting",
    buildingId: 0,
    title: '',
    date:'',
    startTime:'',
    endTime:'',
    meetingRoomId:0
});
