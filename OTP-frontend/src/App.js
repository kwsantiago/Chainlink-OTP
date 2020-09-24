import React from "react";
import "./App.css";
import OTPGenerator from "./OTPGenerator/component";
import withTheme from "./shared/HOCs/withTheme";
import useWeb3 from "./shared/hooks/withWeb3";
import { EthAddress } from "rimble-ui";
import Card from "./shared/UI/Card";
const DisplayAddress = ({ account = "" }) => <EthAddress address={account} />;
const App = (props) => {
  const { account, web3 } = useWeb3();
  return (
    <Card>
      {account.length > 1 && <DisplayAddress account={account} />}
      <OTPGenerator />
    </Card>
  );
};

export default withTheme(App);
