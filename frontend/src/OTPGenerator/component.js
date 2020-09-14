import React, { useState } from "react";
import { pad_of_lowercase } from "../utils/VRF";

const IteratePads = ({ pads = [] }) =>
  pads.length > 0 && pads.map((x, i) => <li key={i}>{x},</li>);

const OTPGenerator = ({
  defaultPadLength = 8,
  defaultPadCount = 5,
  onClick,
}) => {
  const [padLength, setPadLength] = useState(defaultPadLength);
  const [padCount, setPadCount] = useState(defaultPadCount);
  const [result, setResult] = useState([]);

  const onGeneratePads = () => {
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
    <div>
      <label htmlFor="padLength">
        Set Pad Length
        <input
          name="padLength"
          id="padLength"
          type="number"
          value={padLength}
          onChange={setter(setPadLength)}
        />
      </label>
      <label htmlFor="padCount">
        Set Number of Pads
        <input
          name="padCount"
          id="padCount"
          type="number"
          value={padCount}
          onChange={setter(setPadCount)}
        />
      </label>
      <button onClick={onGeneratePads}>Generate Pads</button>
      <h3>OTP Results:</h3>
      <ul
        style={{
          display: "flex",
          flexDirection: "column",
          listStyleType: "none",
        }}
      >
        <IteratePads pads={result} />
      </ul>
    </div>
  );
};

export default OTPGenerator;
