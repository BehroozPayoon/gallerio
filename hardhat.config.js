require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
privateKey = fs.readFileSync('.secret').toString();

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: 'https://rpc-mumbai.matic.today',
      chainId: 80001,
      accounts: [privateKey],
    },
    mainnet: { 
      url: 'https://rpc-mainnet.matic.network',
      chainId: 137,
      accounts: [privateKey],
    }
  },
  solidity: "0.8.4",
};
