import React, { useEffect, useState } from "react";
import "./App.css";
import { ethEnabled } from "./utils/web3";
import Message from "./Message/component";
import OTPGenerator from "./OTPGenerator/component";

const App = () => {
  const [account, setAccount] = useState([]);

  useEffect(() => {
    ethEnabled();

    let web3 = window.web3;
    web3.eth
      .getAccounts()
      .then((response) => {
        setAccount(response);
      })
      .catch((err) => {
        console.log("Error::", err);
        setAccount([]);
      });
  }, []);

  return (
    <div>
      <OTPGenerator />
      <div>
        <h2>Current Metamask Account {account.length > 0 && account[0]}</h2>
        <Message />
      </div>
    </div>
  );
};

export default App;
