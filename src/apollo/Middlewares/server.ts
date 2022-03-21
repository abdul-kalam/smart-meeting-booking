/**
 * This file setup the connection to a graphql server
 */
import { HttpLink } from "@apollo/client";

const protocol = process.env.REACT_APP_GRAPHQL_PROTOCOL;
const host = process.env.REACT_APP_GRAPHQL_HOST;
const port = process.env.REACT_APP_GRAPHQL_PORT || '';
const version = process.env.REACT_APP_GRAPHQL_VERSION || '';
const route = process.env.REACT_APP_GRAPHQL_ROUTE || '';

const serverLink: HttpLink = new HttpLink({
    uri: `http://smart-meeting.herokuapp.com/graphql`,
    headers: {"token":"ak123gjhgjsdf6576"},
});

export default serverLink;
