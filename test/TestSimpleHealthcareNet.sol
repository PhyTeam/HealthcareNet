pragma solidity ^0.4.2;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/SimpleHealthcareNet.sol";

contract TestSimpleHealthcareNet{

  function testItStoresAValue() public {
    SimpleHealthcareNet simpleHN = SimpleHealthcareNet(DeployedAddresses.SimpleHealthcareNet());

    simpleHN.set('89', '98');

    uint expected = 89;

  }

}


