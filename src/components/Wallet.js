import React, { useState } from 'react';
import { loadBlockchainData } from '../utils/web3';

const Wallet = () => {
  const [account, setAccount] = useState("");
  const [balance, setBalance] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const connectWallet = async () => {
    try {
      const { account, balance } = await loadBlockchainData();
      setAccount(account);
      setBalance(balance);
    } catch (error) {
      setErrorMessage("Error connecting wallet: " + error.message);
    }
  };

  const disconnectWallet = () => {
    setAccount("");
    setBalance("");
    setErrorMessage("");
  };

  return (
    <div>
      {account ? (
        <button onClick={disconnectWallet}>Disconnect</button>
      ) : (
        <button onClick={connectWallet}>Connect Your MetaMask</button>
      )}
      {account && (
        <div>
          <p>Account: {account}</p>
          <p>Balance: {balance} ETH</p>
        </div>
      )}
      {errorMessage && (
        <div style={{ color: "red", marginTop: "20px" }}>
          <p>{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default Wallet;
