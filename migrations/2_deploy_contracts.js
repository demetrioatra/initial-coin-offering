const DevDToken = artifacts.require("DevDToken");

module.exports = function (deployer) {
  deployer.deploy(DevDToken);
};