import gql from "graphql-tag";

export const getBuildings = gql`
    query getBuilding {
        Buildings {
            id
            name
            meetingRooms {
                id
                name
                meetings {
                    title
                    date
                    startTime
                    endTime
                }
            }
        }
    }
`;

export const getBuildingById = gql`
    query getBuildingById($buildingId: Int!) {
        Building(id : $buildingId) {
            id
            name
            meetingRooms {
                id
                name
                floor
                meetings {
                    title
                    date
                    startTime
                    endTime
                }
            }
        }
    }
`;

