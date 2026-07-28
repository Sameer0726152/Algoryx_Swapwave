# SwapWave — Intent-Based DEX Aggregator

A web application where users describe token swaps in plain English and receive the best available rate across multiple DEX aggregators in real time.

---

## 🚀 What It Does

- 🧠 Natural language intent parser understands plain-English swap requests
- 🔄 Fetches live quotes from **4 DEX aggregators** in parallel:
  - Paraswap
  - 0x
  - KyberSwap
  - OpenOcean
- 📊 Displays the best route with a detailed comparison table
- 🦊 Simulates or executes swaps through MetaMask
- ⛓️ Records swap intent on-chain using a HeLa Testnet smart contract

---

## 🛠️ Tech Stack

- React + Vite
- ethers.js v6
- wagmi
- Regex-based Natural Language Intent Parser
- Paraswap API
- 0x API
- KyberSwap API
- OpenOcean API
- Solidity
- HeLa Testnet

---

## 📄 Smart Contract

**Network:** HeLa Testnet

**Contract Address:**

```text
0x28DaED322680592883F685716975D75DB1037724
```

---

## ⚙️ Setup

```bash
npm install
cp .env.example .env
# Fill in your API keys
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file in the project root.

```env
VITE_ZEROX_KEY=
# Get free at https://0x.org/docs/api

VITE_ALCHEMY_RPC=
# Get free at https://alchemy.com

VITE_WALLETCONNECT_ID=
# Get free at https://cloud.walletconnect.com

VITE_GROQ_KEY=
# Get free at https://console.groq.com
```

---

## 💬 Example Prompts

```text
Convert 1 ETH to USDC

Swap half my ETH to Bitcoin

Get DAI with 0.5 ETH
```

---

## 🌐 Live Demo

https://swapwave.vercel.app

---

## 🎥 Demo Video

https://youtu.be/_K3xeWToP2M

---

## 📜 Example Transactions

1. `0x12bf77af259787d61e9b996365c6e9030742706bb8e8f1b865e01f7f978d2da2`
   - Simulate Swap (USDC → ETH)

2. `0x6f38bfa979d85558392855508e5c9b4b29460bb0fac89edfb42a1ac9c0b9f72b`
   - Simulate Swap (ETH → DAI)

3. `0x4556807c27eec3fe503cf7c9525cdcf589f5914cd08c8328d04af7bbe95ab8a8`
   - Simulate Swap (ETH → USDC)

---

## 👥 Collaborators

| Name | GitHub |
|------|--------|
| **Sameer Talekar** | https://github.com/Sameer0726152 |
| **Nihar Bhavsar** | https://github.com/niharbhavsar5-creator |
| **Namrata Dalvi** | https://github.com/namratadalvi11 |
| **Pranjal Patil** | https://github.com/tinappatil123-cloud |
| **Rahul Dupare** | https://github.com/jadeleunatic92381 |

## 📌 Summary

SwapWave parses natural-language token swap requests, gathers quotes from multiple DEX aggregators, compares all available routes, recommends the best execution path, and records the swap intent on the HeLa Testnet.
