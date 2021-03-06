const HDWalletProvider = require("@truffle/hdwallet-provider")

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    ropsten: {
      provider: () => {
        return new HDWalletProvider({
          mnemonic: {
            phrase: "sea peace bike clock whip caution fiber wrist force pair disease release"
          },
          providerOrUrl : "https://ropsten.infura.io/v3/a9464a6968ab4a509cefe50f66baa7f9"
        })
      },
      network_id: 3,
      gas: 4700000
    }
  },

  contracts_build_directory: './src/abis/',
 
  compilers: {
    solc: {
      version: "0.7.0",
      optimizer: {
        enabled: true,
        runs: 200
      },
      evmVersion: "petersburg"    
    }
  }
}
