var pandacoin = require('node-pandacoin')()

pandacoin.set('host', '45.79.170.139')
pandacoin.set({ port: 20000 })
pandacoin.auth('Cypherfunkrpc', '3LtYSz3zb7nErtWEPKzAA2vhEAjutqQMrFo3uRFU9Mfh')

const panda = exports

panda.getNewAddress = () => {
  return new Promise((resolve, reject) => {
    pandacoin.getnewaddress('tokend', (err, token) => {
      if (err) return reject(err)
      resolve(token)
    })
  })
}


panda.findTransaction = (address) => {
  return new Promise((resolve, reject) => {
    pandacoin.listtransactions('tokend', 9999999, (err, trans) => {
		console.log(trans)
      if (err) return reject(err)
      const found = trans.filter(tran => tran.address === address)
	console.log('This is found')
	console.log(found)
	console.log('This is Address')
	console.log(address)
	if (!found) return reject(new Error("No transaction found"))
      const passed = found.filter(trans => (Number(trans.amount) >= 1000.00000000))
      if (passed) {
        return resolve(passed[0])
      }
      return reject(new Error("No transaction found"))
    })
  })
}
