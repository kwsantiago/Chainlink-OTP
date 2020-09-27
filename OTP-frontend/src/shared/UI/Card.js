import React from "react";
import { Card, Heading } from "rimble-ui";

const CardComponent = ({ children }) => (
  <Card width={"auto"} maxWidth={"600px"} mx={"auto"} px={[3, 3, 4]}>
    <Heading>Chainlink VRF One-time Pad (OTP)</Heading>
    {children}
  </Card>
);

export default CardComponent;
