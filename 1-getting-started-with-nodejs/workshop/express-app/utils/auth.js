const expressJwt = require('express-jwt');
const jwt = require('jsonwebtoken');

const secret = 'secret123';

function getToken(req) {
  if(req.cookies && req.cookies.token){
    return req.cookies.token;
  }

  return null;
}

function authRequired() {
  return expressJwt({ secret, getToken });
}

function login(username, password) {
  if(username === 'user' && password === 'password'){
    const token = jwt.sign({ 
      sub: username,
      exp: Math.floor(Date.now() / 1000) + (60 * 60)
    }, secret);
    
    return token;
  }

  return null;
}

module.exports = { 
  authRequired: authRequired,
  login: login 
};