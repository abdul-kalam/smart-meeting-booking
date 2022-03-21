import { getApolloClient } from "apollo";
import { gql } from '@apollo/client';
import { getMeeting } from "apollo/Operations/Client/Queries";

export const updateLocalMeeting = (obj: any) => {
    try {
        const client =  getApolloClient();
        const current = client.readQuery({ query: getMeeting });
        console.log(current, obj)
        const updatedMeeting = { ...current.meeting, ...obj };

        client.writeQuery({
            query: getMeeting,
            data: {
                meeting: updatedMeeting,
            },
        });
    } catch (error: any) {
        throw new Error(error.message);
    }
};

export const SAVE_MEETING = gql`
  mutation saveMeeting(
    $id: Int!,
    $title: String!,
    $date: String!,
    $startTime: String!,
    $endTime: String!,
    $meetingRoomId: Int!) {
    Meeting(
        id: $id,
        title: $title,
        date: $date,
        startTime: $startTime,
        endTime: $endTime,
        meetingRoomId: $meetingRoomId
    ) {
      id
      title
    }
  }
`;
