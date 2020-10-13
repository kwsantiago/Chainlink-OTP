import React from "react";
import "./assets/css/App.css";
import OTPGenerator from "./assets/utils/otpGenerator.js";
import withTheme from "./assets/shared/HOCs/withTheme";
import useWeb3 from "./assets/shared/hooks/withWeb3";
import { EthAddress } from "rimble-ui";
import Card from "./assets/shared/UI/Card";

const DisplayAddress = ({ account = "" }) => <EthAddress address={account} />;
const App = (props) => {
  const { account, web3 } = useWeb3();
  return (
    <Card>
        {account && <DisplayAddress account={account} />}
      <OTPGenerator />
    </Card>
  );
};

export default withTheme(App);
