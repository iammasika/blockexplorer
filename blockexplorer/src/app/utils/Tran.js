import { Alchemy, Utils, Network } from "alchemy-sdk";

// Configures the Alchemy SDK
const config = {
  apiKey: "alchemy-replit", // Replace with your API key
  network: Network.ETH_MAINNET, // Replace with your network
};

// Creates an Alchemy object instance with the config to use for making requests
const alchemy = new Alchemy(config);

//returns the block by passing either hash or block number
/*
export const getBlock = async (blocknumberorhash) => {
  const block1 = await alchemy.core.getBlock(
   blocknumberorhash
);

  return block1;
};

*/

//This method returns the whole full block detail
export const getBlock = async (blocknumberorhash) => {
  const block1 = await alchemy.core.send("eth_getBlockByNumber", [
    Utils.hexValue(blocknumberorhash),
    true,
  ]);

  return block1;
};

/*
//returns tevent signature of function passed
export const getEventSignature= async (address,address1,uint256)=>{
   return  keccak256(Transfer(address,address1,uint256));
};
*/
//Getting transcation from a hash
export const getTransaction = async (hash) => {
  const tx = await alchemy.core.getTransaction(
   hash
  );
  return tx;
};
//getTransactionHash();

//Getting Transaction Receipt of a transaction
export const getTransactionReceipt = async (hash) => {
  const txReceipt = await alchemy.core.getTransactionReceipt(
    hash
  );
  return txReceipt;
};
//getTransactionReceipt();

//getting User transaction count useful for calculating the nonce
export const getTransactionCount = async () => {
  const txCount = await alchemy.core.getTransactionCount(
    "0x4976fb03C32e5B8cfe2b6cCB31c09Ba78EBaBa41"
  );
  console.log(txCount);
};
//getTransactionCount();

//Estimating Gas Transaction using estimate gas
export const getEstimateGas = async () => {
  const gasEstimate = await alchemy.core.estimateGas({
    // ETH address
    to: "vitalik.eth",
    // 1 ether
    value: Utils.parseEther("1.0"),
  });
  console.log(gasEstimate);
};

//getEstimateGas();

// returns a JSON Object when pending transaction with same requirement is submitted orr confirmed
export const getPendingTransacation = async () => {
  alchemy.ws.on(
    {
      method: "alchemy_pendingTransactions",
      toAddress: "vitalik.eth",
    },
    (tx) => console.log(tx)
  );
};
//getPendingTransacation();
