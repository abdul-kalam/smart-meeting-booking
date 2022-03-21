import { ApolloError } from "@apollo/client";

export namespace BuildingDetailsProps {
    export interface IProps {
        buildingId: number;
        total: number
    }
}
