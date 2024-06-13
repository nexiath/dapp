import Web3 from 'web3';

export const loadWeb3 = async () => {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
  } else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider);
  } else {
    throw new Error("Non-Ethereum browser detected. You should consider trying MetaMask!");
  }
};

export const loadBlockchainData = async () => {
  await loadWeb3();
  const web3 = window.web3;
  const accounts = await web3.eth.getAccounts();
  const balanceWei = await web3.eth.getBalance(accounts[0]);
  const balanceEth = web3.utils.fromWei(balanceWei, "ether");
  return { account: accounts[0], balance: balanceEth };
};
