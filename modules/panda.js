var pandacoin = require('node-pandacoin')()

pandacoin.set({ port: 10000 })
pandacoin.auth('pandacoinrpc', '38ZjqLZzb2PQujUmQMCir42Ah4c6KUj6MwBWeqT3ffq7')

const panda = exports

panda.getNewAddress = () => {
  return new Promise((resolve, reject) => {
    pandacoin.getnewaddress('tokend', (err, token) => {
      if (err) return reject(err)
      resolve(token)
    })
  })
}