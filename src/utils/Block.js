
//import { getBlock } from './Tran.js';
 const blockinfo=async () =>{
    const block= await getBlock(19934624);
    
    console.log(block.hash);
 }
 blockinfo();