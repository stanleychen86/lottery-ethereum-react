import Web3 from 'web3';

//access to rinkeby network and access to all the keys and addresses
//const web3 = new Web3(window.web3.currentProvider);


window.ethereum.request({method: 'eth_requestAccounts'});

let web3 = new Web3(Web3.givenProvider || 'ws://localhost:3000');

export default web3;


