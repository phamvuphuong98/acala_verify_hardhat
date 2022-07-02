const { txParams } = require("../utils/transactionHelper");

async function main() {
  const ethParams = await txParams();

  const [deployer] = await ethers.getSigners();

  console.log("Deploying contract with the account:", deployer.address);

  console.log("ethParams.txGasPrice:", ethParams.txGasPrice);
  console.log("ethParams.txGasLimit", ethParams.txGasLimit);

  const Token = await ethers.getContractFactory("Token");
  const instance = await Token.deploy({
      gasPrice: ethParams.txGasPrice,
      gasLimit: ethParams.txGasLimit,
    });

  await instance.deployed();
  console.log("Token address:", instance.address);

}

main()
.then(() => process.exit(0))
.catch((error) => {
        console.error(error);
        process.exit(1);
});