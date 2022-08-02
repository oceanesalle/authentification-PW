const jwt = require('jsonwebtoken');
require('dotenv').config();

const user = {
  id: 42,
  name: 'Jean bon',
  email: 'jeanbon@gmail.com',
  admin: true,
};

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1800s'});
}

