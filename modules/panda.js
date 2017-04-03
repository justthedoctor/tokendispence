var pandacoin = require('node-pandacoin')()

pandacoin.set('host', '')
pandacoin.set({ port:  })
pandacoin.auth('', '')

const panda = exports

panda.getNewAddress = () => {
  return new Promise((resolve, reject) => {
    pandacoin.getnewaddress('tokend', (err, token) => {
      if (err) return reject(err)
      resolve(token)
    })
  })
}