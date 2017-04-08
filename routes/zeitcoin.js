var express = require('express');
var router = express.Router();

module.exports = (panda) => {
  router.get('/', function(req, res, next) {
    panda.getNewAddress()
      .then(token => res.redirect(`/zeitcoin/token/${token}`))
      .catch(err => next(err))
  });

  router.get('/token/:address', function(req, res, next) {
    panda.findTransaction(req.params.address)
      .then(trans => res.render('zeitcoin', { title: 'Token Dispencer',
address: req.params.address, trans }))
      .catch(err => res.render('zeitcoin', { title: 'Token Dispencer',
address: req.params.address, error: err.message }))
  });

  return router
}
