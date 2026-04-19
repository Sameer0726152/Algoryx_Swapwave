import { HardhatUserConfig } from 'hardhat/config'
import hardhatToolboxMochaEthers from '@nomicfoundation/hardhat-toolbox-mocha-ethers'
import * as dotenv from 'dotenv'
dotenv.config()

const config: HardhatUserConfig = {
  plugins: [hardhatToolboxMochaEthers],
  solidity: {
    version: '0.8.20',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      evmVersion: 'london',
    },
  },
  networks: {
    hela: {
      type:     'http',
      url:      process.env.VITE_HELA_RPC ?? 'https://testnet-rpc.helachain.com',
      chainId:  666888,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
  },
}

export default config