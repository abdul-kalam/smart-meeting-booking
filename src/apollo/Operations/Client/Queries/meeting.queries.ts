import gql from "graphql-tag";

export const getMeeting= gql`
    query Meeting {
        meeting @client {
            buildingId
            title
            date
            startTime
            endTime
            meetingRoomId
        }
    }
`;


