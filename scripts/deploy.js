const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  const initialSupply = ethers.parseUnits("1000000", 18); // 1 million tokens

  const Token = await ethers.getContractFactory("MyToken");
  const token = await Token.deploy(initialSupply);

  await token.waitForDeployment();

  console.log(`✅ Token deployed to: ${token.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
