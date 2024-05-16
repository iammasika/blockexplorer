const { IdentitySDK } = require("@onchain-id/identity-sdk");

const ethers = require("ethers");

const provider = ethers.getDefaultProvider("ropsten");

async function getIdentity() {
  // instantiate an Identity from its address on a specific network.
 const  identity = await IdentitySDK.Identity.at(
    "0xadD92F8Ef0729E969c5a98Ea5740c9b644B362e3",
    { provider }
  );
  console.log(identity);
}

getIdentity();

async function getClaim ()  {
    // instantiate an Identity from its address on a specific network.
  const identity = await IdentitySDK.Identity.at(
    "0xadD92F8Ef0729E969c5a98Ea5740c9b644B362e3",
    { provider }
  );
  //  const claims = await identity.getClaimsByType(1);
    
    //console.log(claims);
    // Will return the parsed claims of the identity.
  };
getClaim();