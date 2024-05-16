// Imports the Alchemy SDK
const { Alchemy, Utils,Network, keccak256 } = require("alchemy-sdk");

// Configures the Alchemy SDK
const config = {
    apiKey: "alchemy-replit", // Replace with your API key
    network: Network.ETH_MAINNET, // Replace with your network
};

// Creates an Alchemy object instance with the config to use for making requests
  const alchemy = new Alchemy(config);

//returns the block by passing either hash or block number
const getBlock = async (blocknumberorhash) => {
  const block1 = await alchemy.core.getBlock(
    "0x92fc42b9642023f2ee2e88094df80ce87e15d91afa812fef383e6e5cd96e2ed3"
);

};



//returns tevent signature of function passed
const getEventSignature= async ()=>{
   return  keccak256(Transfer(address,address,uint256));
};

//Getting transcation from a hash
const getTransactionHash= async ()=>{
  const tx = await alchemy.core.getTransaction(
    "0x88df016429689c079f3b2f6ad39fa052532c56795b733da78a91ebe6a713944b"
  );
  console.log(tx);
}
//getTransactionHash();

//Getting Transaction Receipt of a transaction
const getTransactionReceipt =async ()=>{
  const txReceipt = await alchemy.core.getTransactionReceipt(
    "0x88df016429689c079f3b2f6ad39fa052532c56795b733da78a91ebe6a713944b"
  );
  console.log(txReceipt);
};
//getTransactionReceipt();


//getting User transaction count useful for calculating the nonce
const getTransactionCount = async ()=>{
  const txCount = await alchemy.core.getTransactionCount(
    "0x4976fb03C32e5B8cfe2b6cCB31c09Ba78EBaBa41"
  );
  console.log(txCount);
}
//getTransactionCount();

//Estimating Gas Transaction using estimate gas
const getEstimateGas= async ()=>{
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
const getPendingTransacation =async ()=>{
  alchemy.ws.on(
    {
      method: "alchemy_pendingTransactions",
      toAddress: "vitalik.eth",
    },
    (tx) => console.log(tx)
  );
}
//getPendingTransacation();