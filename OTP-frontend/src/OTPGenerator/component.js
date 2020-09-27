import React, { useState } from "react";
import { pad_of_lowercase } from "../utils/VRF";
import { Button, Input, Box, Table } from "rimble-ui";
import cuid from "cuid";
const IteratePads = ({ pads = [] }) =>
  pads.length > 0 &&
  pads.map((x, i) => (
    <tr key={cuid()}>
      <td>Pad {++i}</td>
      <td>{x}</td>
    </tr>
  ));

const Results = ({ pads }) => (
  <Table>
    <thead>
      <tr>
        <th></th>
        <th>OTP Results</th>
      </tr>
    </thead>
    <tbody>
      <IteratePads pads={pads} />
    </tbody>
  </Table>
);

const OTPGenerator = ({ defaultPadLength = 8, defaultPadCount = 5 }) => {
  const [padLength, setPadLength] = useState(defaultPadLength);
  const [padCount, setPadCount] = useState(defaultPadCount);
  const [result, setResult] = useState([]);

  const onGeneratePads = () => {
    console.log({ padLength, padCount });
    const result = pad_of_lowercase(padLength, padCount);
    console.log({ result });
    setResult(result);
  };

  const setter = (set) => (e) => {
    const { target } = e;
    const { value } = target;
    set(value);
  };
  return (
    <Box mt={3}>
      <div>Pad Length</div>
      <Input
        name="padLength"
        id="padLength"
        type="number"
        value={padLength}
        placeholder="Set Pad Length"
        onChange={setter(setPadLength)}
      />
      <div>Pad Count</div>
      <Input
        name="padCount"
        id="padCount"
        type="number"
        value={padCount}
        onChange={setter(setPadCount)}
        placeholder="Set Number of Pads"
      />

      <Button
        width={[1, "auto", "auto"]}
        mt={2}
        mb={2}
        onClick={onGeneratePads}
      >
        Generate Pads
      </Button>
      <Results pads={result} />
    </Box>
  );
};

export default OTPGenerator;
