import Web3 from 'web3'

let getDatabaseName = (address) => {
	console.log(address);
	return new Promise(function(resolve, reject) {
		  const db = "http://localhost:3001/patients/" + address ;
		  resolve(db);
	})
}

export default getDatabaseName
