
var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var SimpleHealthcareNet = artifacts.require("./SimpleHealthcareNet.sol");

contract('SimpleHealthcareNet', function(accounts) {

  it("...should store the hash value ", function() {
    web3.eth.defaultAccount = web3.eth.coinbase;
    return SimpleHealthcareNet.deployed().then(function (instance) {
      myInstance = instance;
      return myInstance.setHashValue(
        '0x1000000000000000000000000000000000000000000000000000000000000000',
         2, {from : accounts[0]});
    }).then(function(results) {
      return myInstance.get.call(2);
    }).then(function(results) {
      assert.equal(results[0], accounts[0], "The address was not correctly set");
      assert.equal(results[1], '0x1000000000000000000000000000000000000000000000000000000000000000', "The value 1 was not stored.");
    });
  });

  it("...should store both hash value and the url", function(accounts) {
    web3.eth.defaultAccount = web3.eth.coinbase;
    return SimpleHealthcareNet.deployed().then(function (instance) {
      myInstance = instance;
      return myInstance.set(
        '0x2000000000000000000000000000000000000000000000000000000000000000',
        '0x2000000000000000000000000000000000000000000000000000000000000000',
        {from : accounts[0]});
    }).then(function (tx) {
      return myInstance.get.call(2);
    }).then(function (rr) {
      
    }); 
  });

});