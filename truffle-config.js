const HDWalletProvider = require('@truffle/hdwallet-provider');
const privateKeys = '4fdc0b11dedf6a097424800304ad27b91ab6e2705bce7299d73d96efab12a598';

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    sepolia: {
      provider: () => new HDWalletProvider(privateKeys, 'https://ethereum-sepolia.blockpi.network/v1/rpc/public', 0, 1, true, null),
      network_id: 11155111,
    }
  },
  compilers: {
    solc: {
      version: "0.5.0",
    }
  },
  plugins: [
    "truffle-contract-size"
  ]
};