const Web3 = require("web3");
const web3 = new Web3(Web3.givenProvider);
const { eth } = web3;
const id = x => x;
// Set up contract instance
const abi = [
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
	}
]

const VRFaddress = "0x2487d4ec9c4a721595925005be6fd2eba0c5628b";
const vrfContract = new eth.Contract(abi, VRFaddress);

var seed = parseInt(Math.random())

const vrfNumber = async () => {
    await window.web3.eth.getAccounts().then(async e => {
        if(!e[0])
            window.ethereum && window.ethereum.enable();
        await window.web3.eth.sendTransaction({
            from: e[0],
            to: VRFaddress,
            data: vrfContract.methods.getRandomNumber(seed).encodeABI()
        });
    })
    const result = await vrfContract.methods.randomResult().call();
    return result;
}

export { vrfNumber };
