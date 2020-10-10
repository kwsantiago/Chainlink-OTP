import React from "react";
import { Card, Heading } from "rimble-ui";

const CardComponent = ({ children }) => (
  <Card width={"auto"} maxWidth={"675px"} mx={"auto"} px={[3, 3, 4]}>
    <Heading>Chainlink VRF One-Time-Pad Generator</Heading>
    {children}
  </Card>
);

export default CardComponent;
