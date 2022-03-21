import { gql } from "@apollo/client";

export const typeDefs = gql`
    type Lang {
        lng: String!
    }

    type Meeting {
        id: Int!
        title: String!
        date: String!
        startTime: String!
        endTime: String!
        meetingRoomId: Int!
    }

    type MeetingResult {
        id: Int!
        title: String!
    }

    type Query {
        i18n: Lang!
        localUser: LocalUser!
        meeting: Meeting
    }

    type Mutation {
        UpdateLocalUser(isLoggedIn: Boolean!): Boolean
        updateLanguage(language: String!): Boolean
        signOut: Boolean
        UpdateMeeting: MeetingResult
    }

    directive @client on FIELD
`;
