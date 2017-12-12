import Web3 from 'web3'

let getDatabaseName = new Promise(function(resolve, reject) {
  const db = "http://192.168.0.101:3001/patients/5a25905b429a196b51edf0c3";
  resolve(db);
})

export default getDatabaseName
