import React from "react";
import { Container, Body } from "./styles";

const StandardTemplate: React.FC = (props: any) => {
  const { children } = props;

  return (
    <Container>
      <Body>{children}</Body>
    </Container>
  );
};

export default StandardTemplate;
