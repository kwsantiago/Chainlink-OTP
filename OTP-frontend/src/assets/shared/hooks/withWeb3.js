import React, { useEffect, useState } from "react";
import { ethEnabled } from "../../utils/web3";

const useWeb3 = () => {
  const [account, setAccount] = useState([]);
  const [web3, setWeb3] = useState({});
  useEffect(() => {
    ethEnabled();
    let web3 = window.web3;
    if(!web3){
      console.log('Web3 not installed.');
      return;
    }
    setWeb3(web3);
    web3.eth
    .getAccounts()
    .then((response) => {
        setAccount(response[0]);
    })
    .catch((err) => {
        console.log("Error::", err);
        setAccount([]);
    });
  }, [account]);

  return { web3, account };
};

export default useWeb3;
