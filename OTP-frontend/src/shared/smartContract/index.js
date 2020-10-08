const Web3 = require("web3");

const web3 = new Web3("https://kovan.infura.io/v3/cc37f552c1354792b23c88d090c4a02f");
const { eth } = web3;
const id = x => x;
// Set up contract instance
const abi = [{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "userProvidedSeed",
				"type": "uint256"
			}
		],
		"name": "getRandomNumber",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "requestId",
				"type": "bytes32"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "nonces",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "randomResult",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "requestId",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "randomness",
				"type": "uint256"
			}
		],
		"name": "rawFulfillRandomness",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "_keyHash",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "_fee",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_seed",
				"type": "uint256"
			}
		],
		"name": "requestRandomness",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "requestId",
				"type": "bytes32"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdrawLink",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
/*
var provider = null;
var signer = null;
if (window.ethereum) {
        provider = new ethers.providers.Web3Provider(window.ethereum)

        signer = provider.getSigner()
        try {
            console.log(provider)
            window.ethereum.enable().then(async () => {
                if (!web3.currentProvider.selectedAddress) { // if wallet is other then metamask
                      // handle web3 not working
                    return
                }
                // if everything ok
                
            }).catch((e) => {
                // handle web3 not working
            })
        } catch (e) {
            // handle web3 not working
        }
}
*/
const address = "0x2487d4ec9c4a721595925005be6fd2eba0c5628b";
const vrfContract = new eth.Contract(abi, address);

var seed = parseInt(Math.random())

const tx = {
  // this could be provider.addresses[0] if it exists
  from: eth.accounts[0],
  // target address, this could be a smart contract address
  to: 0x2487D4EC9C4a721595925005bE6fd2EBA0c5628B,
  // optional if you want to specify the gas limit
  data: vrfContract.methods.getRandomNumber(seed).encodeABI()
};

//const signPromise = eth.accounts.signTransaction(tx, tx.from);

export async function getVRF(){
    console.log(window.ethereum)
    //signPromise();
}

export const vrfNumber = async () => {
    var result = await vrfContract.methods.randomResult().call();
    return result;
}
