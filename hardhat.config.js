require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    aurora: {
      url: `https://mainnet.aurora.dev`,
      accounts: [process.env.privateKey],
    },
    fantom: {
      url: `https://rpc.ftm.tools/`,
      accounts: [process.env.privateKey],
    },
    hardhat: {
      accounts: {key:"0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"},
    }
  },
  solidity: {
    compilers: [
      { version: "0.8.7" },
      { version: "0.7.6" },
      { version: "0.6.6" },
      { version: "0.8.19" }
    ]
  },
};
