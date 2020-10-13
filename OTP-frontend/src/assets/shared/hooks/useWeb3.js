import React, { useEffect, useState } from "react";
import { ethEnabled } from "../../utils/web3";
import { useInterval } from "./useInterval";

const useWeb3 = () => {
  const [account, setAccount] = useState("");
  const [web3, setWeb3] = useState({});

  useEffect(() => {
    ethEnabled();
  }, []);

  useInterval(() => {
    const web3 = window.web3;
    if (web3) {
      setWeb3(web3);
      web3.eth
        .getAccounts()
        .then((response) => {
          setAccount(response[0]);
        })
        .catch((err) => {
          console.log("Error::", err);
          setAccount("");
        });
    }
  }, [1000]);

  return { web3, account };
};

export default useWeb3;
