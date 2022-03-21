import React from "react";
import loadable from "@loadable/component";
import { LoadingContainer } from "./styles";

export const SmartMeeting = loadable(() => import("pages/SmartMeeting"), {
    fallback: (
        <LoadingContainer>
            <span>Loading...</span>
        </LoadingContainer>
    ),
});

export const Welcome = loadable(() => import("pages/Welcome"), {
    fallback: (
        <LoadingContainer>
            <span>Loading...</span>
        </LoadingContainer>
    ),
});

export const ErrorPage = loadable(() => import("pages/ErrorPage"), {
    fallback: (
        <LoadingContainer>
            <span>Loading...</span>
        </LoadingContainer>
    ),
});
