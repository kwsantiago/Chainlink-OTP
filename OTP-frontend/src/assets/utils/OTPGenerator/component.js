import React, { useState } from "react";
import { genPads } from "../VRF";
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

const OTPGenerator = () => {
  const [padLength, setPadLength] = useState(6);
  const [result, setResult] = useState([]);

  const onGeneratePads = async function otpGen() {
    console.log(padLength);
    const result = await genPads(6);
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
      <div><Button
        width={[1, "auto", "auto"]}
        mt={2}
        mb={2}
        onClick={onGeneratePads}
      >
        Generate Pads
      </Button></div>
      <Results pads={result} />
    </Box>
  );
};

export default OTPGenerator;
