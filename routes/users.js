var express = require('express');
var router = express.Router();

module.exports = (panda) => {
  router.get('/', function(req, res, next) {
    panda.getNewAddress()
      .then(token => res.render('users', { title: 'Users', address: token }))
      .catch(err => next(err))
  });
  
  return router
}