const InfoContract = artifacts.require("InfoContract");

module.exports = async function(deployer) {
  await deployer.deploy(InfoContract);
};
