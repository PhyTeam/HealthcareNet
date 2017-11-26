var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var SimpleHealthcareNet = artifacts.require("./SimpleHealthcareNet.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(SimpleHealthcareNet);
};
