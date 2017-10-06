var auth = require('../utils/auth');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  var token = auth.login(username, password);

  if(token) {
    res.cookie('token', token);
    res.status(200).json({ status: 'success', token: token });
  }
  else {
    res.status(401).json({ status: 'error' });
  }
  
});

module.exports = router;
