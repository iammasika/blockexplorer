"use client"
import { useEffect, useCallback, useState } from "react";
import { getBlock, getTransaction ,getTransactionReceipt} from "./utils/Tran";
import "./globals.css";
import { Alchemy,Utils, Network } from "alchemy-sdk";
import {ethers ,AbiCoder,decodeBytes32String}from "ethers"
import Example from "./navbar";

function App() {
  const [blockNumber, setBlockNumber] = useState();
  const [blockHieght, setBlockHieght] = useState();
  const [timestamp, setTimestamp] = useState();
  const [FeeRecepient, setFeerecepient] = useState();
  const [parentHash, setParentHash] = useState();
  const [totalDifficulty, setTotaldifficulty] = useState();
  const [baseFee, setBaseFee] = useState();
  const [gasLimit, setgasLimit] = useState();
  const [gasUsed, setgasUsed] = useState();
  const [extraData, setExtraData] = useState();
  const [hash, setHash] = useState();
  const [burntFeee, setBurntFee] = useState();
  const [nonce, setNonce] = useState();
  const [size, setSize] = useState();
  const [withdraw, setWithdrawalRoot] = useState();
  const [transactionRoot, setTransactionRoot] = useState();
  const [stateRoot, setStateRoot] = useState();
  const [transaction, setTransactionList] = useState();
  //return a memoized version of the callback that only changes if one of the inputs has changed.
  const onBlockChange = useCallback((e) =>
    setBlockNumber(Number(e.target.value))
  );
  const main = async (blockNumber1) => {
    // calling the getBlock method to get the latest block
    const response = await getBlock(blockNumber1);
    // console.log(response.transactions);
    setBlockHieght(response.number);
    const date = Date(response.timestamp);

    setTimestamp(date);
    setParentHash(response.parentHash);
    setTotaldifficulty(response.difficulty);
    setFeerecepient(response.miner);
    setTransactionList(response.transactions);

    setBaseFee(response.baseFeePerGas);
    setExtraData(response.extraData);
    setgasLimit(response.gasLimit);

    setgasUsed(response.gasUsed);
    setHash(response.hash);

    setSize(response.size);
    setNonce(response.nonce);
    setStateRoot(response.stateRoot);
    setWithdrawalRoot(response.withdrawalsRoot);
    setTransactionRoot(response.transactionsRoot);
    await getTransactionHash(response.transactions);
  };

  const getTransactionHash = async (transaction) => {
    const transaction1 = [];
    //lenth of array is less than one since array start at 0
    for (var i = 0; i < transaction.length; i++) {
      transaction1.push(transaction[i].hash);
    }
    // console.log(transaction1);
    // setTransactionList(transaction1);
    let list = document.getElementById("mylist");
    transaction1.forEach((item) => {
      let li = document.createElement("li");
      li.innerText = item;
      list.appendChild(li);
    });
  };
  async function gettransacation(){
    //returns transaction receipts
  const trans=  await getTransactionReceipt('0xcad5bd742fb19899edc3fa1c1d1c1c3c322d6ac7ce740860991995860dad94d4');
  //first calls thedefaultAbi then decodes 
  const data='0x00000000000000000000000022f9dcf4647084d6c31b2765f6910cd85c178c18;                                         /';
  const log1=AbiCoder.defaultAbiCoder().decode(['address'],data);
  console.log(log1);
  }

  return (
    <div>
      <Example/>
      <div>
        Block Number: {"#" + blockNumber}
        <div>
          <input
            placeholder="Enter your BlockNumber"
            value={blockNumber}
            onChange={onBlockChange}
          />
          <button
            onClick={async () => {
              await main(blockNumber);
            }}
          >
            getBlockInfo
          </button>
          <div>
            <label> Block Height: {blockHieght}</label>
          </div>
          <div>
            <label>Status:</label>
          </div>
          <div>
            <label>Timestamp:{timestamp}</label>
          </div>
          <div>
            <label>Proposed On:</label>
          </div>
          <div>
            <label> Fee Recipient:{FeeRecepient}</label>
          </div>
          <div>
            <label>Block Reward:</label>
          </div>
          <div>
            <label>Total Difficulty:{totalDifficulty}</label>
          </div>
          <div>
            <label> Size:{size}</label>
          </div>
        </div>
        <div>
          <label>Gas Used: {gasUsed}</label>
        </div>
        <div>
          <label>Gas Limit:{gasLimit}</label>
        </div>
        <div>
          <label>Base Fee Per Gas: {baseFee}</label>
        </div>
        <div>
          <label>Burnt Fees: {gasUsed * baseFee}</label>
        </div>
        <div>
          <label>Extra Data:{extraData}</label>
        </div>
        <div>
          <label>Hash:{hash}</label>
        </div>
        <div>
          <label>Parent Hash:{parentHash}</label>
        </div>
        <div>
          <label>State Root:{stateRoot}</label>
        </div>
        <div>
          <label>Withdrawal Root:{withdraw}</label>
        </div>
        <div>
          <label>Nonce:{nonce}</label>
        </div>
        <div>
          <label>TransactionRoot: {transactionRoot}</label>
        </div>
        <div>
          <ul id="mylist">TransactionList</ul>
        </div>
        <div>
          <button onClick={gettransacation
          }>Transaction Information</button>
        </div>
      </div>
    </div>
  );
}

export default App;
