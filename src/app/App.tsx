import React from "react";
import { Switch, Route, Redirect, RouteComponentProps } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import {theme, GlobalStyle} from "styles";
import { ErrorPage } from "./loadable";
import SmartMeeting  from "./../pages/SmartMeeting";
import AddMeeting  from "./../pages/AddMeeting";

import RoomSelect  from "./../pages/RoomSelect";

const App = () => {
    return (
        <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
            <Switch>
                <Route exact path="/" component={SmartMeeting} />
                <Route exact path="/add-meeting" component={AddMeeting} />
                <Route exact path="/select-room" component={RoomSelect} />
                <Route
                    exact
                    path="/NotFound"
                    render={(props: RouteComponentProps<any>) => (
                        <ErrorPage
                            type="404"
                            history={props.history}
                            location={props.location}
                            match={props.match}
                        />
                    )}
                />
                <Route
                    exact
                    path="/Unauthorized"
                    render={(props: RouteComponentProps<any>) => (
                        <ErrorPage
                            type="403"
                            history={props.history}
                            location={props.location}
                            match={props.match}
                        />
                    )}
                />
                <Route
                    exact
                    path="/Error"
                    render={(props: RouteComponentProps<any>) => (
                        <ErrorPage
                            type="500"
                            history={props.history}
                            location={props.location}
                            match={props.match}
                        />
                    )}
                />

                <Redirect to="/NotFound" />
            </Switch>
        </ThemeProvider>
        </>
    );
};

export default App;
