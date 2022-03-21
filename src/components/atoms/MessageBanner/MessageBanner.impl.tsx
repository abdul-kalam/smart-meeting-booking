import React from "react";
import { MessageBox, Message } from "./styles";
import { MessageBannerProps } from "./MessageBanner.interface";

export const MessageBanner: React.FC<MessageBannerProps.IProps> = props => {
  return (
    <MessageBox type={props.type}>
      <Message>{props.children}</Message>
    </MessageBox>
  );
};
