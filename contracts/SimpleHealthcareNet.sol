pragma solidity ^0.4.2;

contract SimpleHealthcareNet {

  struct MedRecord
  {
	/* Address of doctor who generate this data */
	address 	doctor;
	/* The string contain the hash of medical record */
	bytes32 	hash;
	/* Url of the resource */
	bytes32 	url;
  }
  uint 					      numTransactions;
  mapping (uint => MedRecord) transactions;

  function SimpleHealthcareNet() public {
    numTransactions++;
    transactions[numTransactions] = MedRecord(msg.sender, "0xfff", "0xff"); 
  }

  function set(bytes32 hash, bytes32 url) public returns (uint transactionId)  {
  	transactionId = numTransactions++;
  	transactions[transactionId] = MedRecord(msg.sender, hash, url);
  }

    function setHashValue(bytes32 hash, uint id) public returns (uint transactionId) {
    transactionId = numTransactions++;
    transactions[numTransactions] = MedRecord(msg.sender, hash, '0xff');
  }

  function get(uint id) public returns (address doctor, bytes32 hash, bytes32 url) {
    hash = transactions[id].hash;
    url  = transactions[id].url;
    doctor = transactions[id].doctor;
  }



  

}
