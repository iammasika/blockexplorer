import { Alchemy, Network } from "alchemy-sdk";
import { useEffect, useState } from "react";

import "./App.css";

// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.
const settings = {
  apiKey: "alchemy-replit",
  network: Network.ETH_MAINNET,
};

// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK is an umbrella library with several different packages.
//
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
const alchemy = new Alchemy(settings);

function App() {
  const [blockNumber, setBlockNumber] = useState();
  const [blockHieght, setBlockHieght] = useState();
  const [timestamp, setTimestamp] = useState();
  const [FeeRecepient, setFeerecepient] = useState();
  const [parentHash, setParentHash] = useState();
  const [totalDifficulty, setTotaldifficulty] = useState();
  
  useEffect(() => {
    const main = async () => {
      // using the block tag "latest" to get the latest block
      // could've used a block hash to get a particualr block as well
      //let blockTagOrHash = "latest"
      setBlockNumber(await alchemy.core.getBlockNumber());

      // calling the getBlock method to get the latest block
      let response = await alchemy.core.getBlock(blockNumber);

      setBlockHieght(response.number);
      setTimestamp(response.timestamp);
      setParentHash(response.parentHash);
      setTotaldifficulty(response.difficulty);
      setFeerecepient(response.miner);

      // logging the response to the console
      //console.log(response);
    };

    main();
  });

  return (
    <>
      Block Number: {blockNumber}
      <div>
        <button type="button" className="btn btn-primary btn-round">
          Notifications <span className="badge badge-warning">4</span>
        </button>
        <a
          href="javascript:;"
          className="btn btn-primary btn-lg disabled"
          role="button"
          aria-disabled="true"
        >
          Primary link
        </a>
        <div>
          <label> Block Height: {blockHieght}</label>
        </div>
        <div>
          <label>Timestamp:{timestamp}</label>
        </div>
        <div>
          <label> Fee Recipient:{FeeRecepient}</label>
        </div>
        <div>
          <label>Total Difficulty:{totalDifficulty}</label>
        </div>
        <div>
          <label> Parent Hash:{parentHash}</label>
        </div>
        <div>
          <label>StateRoot:</label>
        </div>
        <div>
          <label>nonce</label>
        </div>
        <div>
          <label>Base Fee Per Gas:</label>
        </div>
      </div>
      <div>
        <label>
          
        </label>
      </div>
    </>
  );
}

export default App;
