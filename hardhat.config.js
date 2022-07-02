require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
 module.exports = {
  solidity: "0.8.4",
  networks: {
    acalaMandala: {
      url: 'https://tc7-eth.aca-dev.network',
      chainId: 595,
      accounts: ["0xa178130ba7d672cd43056fa3a1188ca2f88a5689741c2901757ed7c98fa49f25"]
    }
  },
  etherscan: {
    apiKey:
    {
      acalaMandala: "T1B8DJII9GCZ9B5DSW6A1WJX3YV2SXTAFQ"
    },
    customChains: [
      {
        network: "acalaMandala",
        chainId: 595,
        urls: {
          apiURL: "https://blockscout.mandala.acala.network/api",
          browserURL: "https://blockscout.mandala.acala.network"
        }
      }
    ]
  },
}