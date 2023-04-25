var InfoContract = artifacts.require("./InfoContract.sol");
module.exports = function(deployer) {
  deployer.deploy(InfoContract);
  // Use deployer to state migration tasks.
};