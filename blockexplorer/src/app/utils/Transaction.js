import { Alchemy,Utils,Network } from 'alchemy-sdk';
// Configures the Alchemy SDK
const config = {
    apiKey: "alchemy-replit", // Replace with your API key
    network: Network.ETH_MAINNET, // Replace with your network
};

// Creates an Alchemy object instance with the config to use for making requests
  const alchemy = new Alchemy(config);
