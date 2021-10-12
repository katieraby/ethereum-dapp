# Ethereum + Hardhat App

A full-stack ethereum dapp, with two smart contracts:
- Greeting users, with the functionality to set a new greeting
- An erc20 contract, allowing users to mint Katie Tokens

To start:

```shell
npx hardhat compile
npx hardhat node
npx hardhat run scripts/deploy.js --network localhost
npm run start
```
