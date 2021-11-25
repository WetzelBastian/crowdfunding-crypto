

// import Web3 from 'web3';
//
// let web3;
//
// if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
//   // We are in the browser and metamask is running.
//   web3 = new Web3(window.web3.currentProvider);
// } else {
//   // We are on the server *OR* the user is not running metamask
//   const provider = new Web3.providers.HttpProvider(
//     'https://rinkeby.infura.io/v3/0cca7535bfef4bbeaf3a465a9a2f8ce7'
//   );
//   web3 = new Web3(provider);
// }
//
// export default web3;


import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // We are in the browser and metamask is running.
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/0cca7535bfef4bbeaf3a465a9a2f8ce7"
  );
  web3 = new Web3(provider);
}

export default web3;


// import Web3 from "web3";
//
// window.ethereum.request({ method: "eth_requestAccounts" });
//
// const web3 = new Web3(window.ethereum);
//
// export default web3;
