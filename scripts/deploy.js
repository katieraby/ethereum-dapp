const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const Greeter = await hre.ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello, World!");

  const KRToken = await hre.ethers.getContractFactory("KRToken");
  const krToken = await KRToken.deploy("Katie Token", "KRT");

  await greeter.deployed();
  await krToken.deployed();

  console.log("Greeter deployed to:", greeter.address);
  console.log("Token deployed to:", krToken.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
