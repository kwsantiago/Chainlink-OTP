const Web3 = require("web3");

const web3 = new Web3("https://kovan.infura.io/v3/cc37f552c1354792b23c88d090c4a02f");
const { eth } = web3;
const id = x => x;
// Set up contract instance
const abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "userProvidedSeed",
        type: "uint256",
      },
    ],
    name: "getRandomNumber",
    outputs: [
      {
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "randomness",
        type: "uint256",
      },
    ],
    name: "rawFulfillRandomness",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_keyHash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_seed",
        type: "uint256",
      },
    ],
    name: "requestRandomness",
    outputs: [
      {
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "randomResult",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const address = "0x8eabb3B41e66f16F2eddA72Bc77Ec0B63b934b00";
const { methods } = new eth.Contract(abi, address);
const { getRandomNumber, randomResult } = methods;

const requestRandomNumber = (seed) =>
  getRandomNumber(seed).call()
    .then(() => randomResult().call())
    .catch(err => {
      console.log("error::", err)
      return err
    });

const seedNumber = eth.getBlockNumber();
const randomNumber = seedNumber.then(requestRandomNumber)

let state = {
  randomNumber: null
};

const getVRF = randomNumber.then(response => {
  state = { randomNumber: response }
  console.log({state})
  return state
})

export default getVRF;
